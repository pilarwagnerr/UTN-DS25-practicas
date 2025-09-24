import { PrismaClient, Prisma, User } from '@prisma/client';

const prisma = new PrismaClient();

export const getUsers = async (): Promise<User[]> => {
return prisma.user.findMany();
};

export const getUserById = async (id: number): Promise<User | null> => {
return prisma.user.findUnique({ where: { id } });
};

export const createUser = async (data: Prisma.UserCreateInput): Promise<User> => {
return prisma.user.create({ data });
};

export const updateUser = async (
id: number,
data: Prisma.UserUpdateInput
): Promise<User> => {
return prisma.user.update({ where: { id }, data });
};

export const deleteUser = async (id: number): Promise<User> => {
return prisma.user.delete({ where: { id } });
};