import { PrismaClient, Prisma, ContactMessage } from '@prisma/client';

const prisma = new PrismaClient();

export const getMessages = async (): Promise<ContactMessage[]> => {
return prisma.contactMessage.findMany();
};

export const getMessageById = async (id: number): Promise<ContactMessage | null> => {
return prisma.contactMessage.findUnique({ where: { id } });
};

export const createMessage = async (data: Prisma.ContactMessageCreateInput): Promise<ContactMessage> => {
return prisma.contactMessage.create({ data });
};

export const deleteMessage = async (id: number): Promise<ContactMessage> => {
return prisma.contactMessage.delete({ where: { id } });
};