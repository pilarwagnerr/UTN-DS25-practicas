import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getUsers = async () => prisma.user.findMany();
export const getUserById = async (id: string) => prisma.user.findUnique({ where: { id: Number(id) } });
export const createUser = async (data: any) => prisma.user.create({ data });
export const updateUser = async (id: string, data: any) => prisma.user.update({ where: { id: Number(id) }, data });
export const deleteUser = async (id: string) => { await prisma.user.delete({ where: { id: Number(id) } }); return true; };