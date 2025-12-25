import { useState } from 'react';
import { Card, Form, Button } from 'tabler-react';
import { useMutation } from '@tanstack/react-query';
import { API_ENDPOINTS } from '../common/constants.api.js';
import { useNavigate } from 'react-router-dom';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: async ({ email, password }) => {
      const res = await fetch(API_ENDPOINTS.LOGIN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) throw new Error('Credenciales inválidas');
      const data = await res.json();
      if (data.access_token) {
        localStorage.setItem('token', data.access_token);
        return data.access_token;
      } else {
        throw new Error('Respuesta inválida del servidor');
      }
    },
    onSuccess: () => {
      navigate('/dashboard');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  };

  return (
    <div style={{ maxWidth: 350, margin: '40px auto' }}>
      <Card>
        <Card.Body>
          <Card.Title>Iniciar sesión</Card.Title>
          <Form onSubmit={handleSubmit} autoComplete="off">
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', marginBottom: 4 }}>
                Email <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="usuario@correo.com"
                required
                className="form-control"
                style={{ width: '100%' }}
                autoComplete="new-email"
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', marginBottom: 4 }}>
                Contraseña <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Contraseña"
                required
                className="form-control"
                style={{ width: '100%' }}
                autoComplete="new-password"
              />
            </div>
            {loginMutation.isError && (
              <div style={{ color: 'red', marginBottom: 8 }}>
                {loginMutation.error.message}
              </div>
            )}
            <Button color="primary" type="submit" loading={loginMutation.isLoading} block>
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
