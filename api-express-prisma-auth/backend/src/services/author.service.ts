import { PrismaClient, Author } from '@prisma/client';

const prisma = new PrismaClient();

export const getAuthors = async (): Promise<Author[]> => {
return prisma.author.findMany({ include: { books: true } });
};

export const getAuthorById = async (id: number): Promise<Author | null> => {
return prisma.author.findUnique({ where: { id }, include: { books: true } });
};

export const createAuthor = async (data: { name: string }): Promise<Author> => {
return prisma.author.create({ data });
};

export const updateAuthor = async (id: number, data: { name?: string }): Promise<Author> => {
return prisma.author.update({ where: { id }, data });
};

export const deleteAuthor = async (id: number): Promise<Author> => {
return prisma.author.delete({ where: { id } });
};