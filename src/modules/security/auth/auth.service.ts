import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      // Exclude password from returned user
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(body: { email: string; password: string; username?: string }) {
    // Hash password and create user
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const user = await this.userService.create({
      email: body.email,
      password: hashedPassword,
      username: body.username,
    });
    // Exclude password from returned user
    const { password, ...result } = user;
    return result;
  }

  async logout() {
    // JWT es stateless, así que el logout es responsabilidad del cliente (borrar token)
    // Aquí solo devolvemos un mensaje estándar
    return { message: 'Logout successful. Please remove the token on client side.' };
  }
}
