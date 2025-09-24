import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAuthors = async () => {
return await prisma.author.findMany({ include: { books: true } });
};

export const getAuthorById = async (id: string) => {
return await prisma.author.findUnique({
    where: { id: Number(id) },
    include: { books: true },
});
};

export const createAuthor = async (data: { name: string }) => {
return await prisma.author.create({ data });
};

export const updateAuthor = async (id: string, data: { name?: string }) => {
return await prisma.author.update({
    where: { id: Number(id) },
    data,
});
};

export const deleteAuthor = async (id: string) => {
await prisma.author.delete({ where: { id: Number(id) } });
return true;
};