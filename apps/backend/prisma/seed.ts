import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  const passwordHash = await bcrypt.hash('admin123', 10)

  // create permissions
  const readPerm = await prisma.permission.upsert({
    where: { name: 'read' },
    update: {},
    create: { name: 'read' },
  })

  const writePerm = await prisma.permission.upsert({
    where: { name: 'write' },
    update: {},
    create: { name: 'write' },
  })

  // create role
  const adminRole = await prisma.role.upsert({
    where: { name: 'admin' },
    update: {},
    create: { name: 'admin' },
  })

  // link role and permissions
  await prisma.rolePermission.upsert({
    where: { roleId_permissionId: { roleId: adminRole.id, permissionId: readPerm.id } },
    update: {},
    create: { roleId: adminRole.id, permissionId: readPerm.id },
  })

  await prisma.rolePermission.upsert({
    where: { roleId_permissionId: { roleId: adminRole.id, permissionId: writePerm.id } },
    update: {},
    create: { roleId: adminRole.id, permissionId: writePerm.id },
  })

  // create user
  const user = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      password: passwordHash,
    },
  })

  // assign role to user
  await prisma.userRole.upsert({
    where: { userId_roleId: { userId: user.id, roleId: adminRole.id } },
    update: {},
    create: { userId: user.id, roleId: adminRole.id },
  })

  console.log('Seed completed')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
