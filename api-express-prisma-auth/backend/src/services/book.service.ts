import { PrismaClient, Category, Book } from '@prisma/client';
const prisma = new PrismaClient();

export const getBooks = async (): Promise<Book[]> => {
return prisma.book.findMany({ include: { author: true } });
};

export const getBooksByCategory = async (categoria: Category): Promise<Book[]> => {
return prisma.book.findMany({ where: { categoria }, include: { author: true } });
};

export const getBookById = async (id: number): Promise<Book | null> => {
return prisma.book.findUnique({ where: { id }, include: { author: true } });
};

export const createBook = async (data: {
titulo: string;
descripcion: string;
categoria: Category;
imagen?: string;
authorId: number;
}): Promise<Book> => {
return prisma.book.create({
    data: {
    ...data,
    imagen: data.imagen ?? 'https://via.placeholder.com/150',
    },
    include: { author: true }
});
};

export const updateBook = async (
id: number,
data: Partial<{
    titulo: string;
    descripcion: string;
    categoria: Category;
    imagen: string;
    authorId: number;
}>
): Promise<Book> => {
return prisma.book.update({
    where: { id },
    data,
    include: { author: true }
});
};

export const deleteBook = async (id: number): Promise<Book> => {
return prisma.book.delete({ where: { id }, include: { author: true } });
};