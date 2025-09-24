import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getMessages = async () => prisma.contactMessage.findMany();
export const getMessageById = async (id: string) => prisma.contactMessage.findUnique({ where: { id: Number(id) } });
export const createMessage = async (data: any) => prisma.contactMessage.create({ data });
export const deleteMessage = async (id: string) => { await prisma.contactMessage.delete({ where: { id: Number(id) } }); return true; };