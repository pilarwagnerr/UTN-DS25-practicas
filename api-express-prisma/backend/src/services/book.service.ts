import { PrismaClient, Category } from '@prisma/client';
const prisma = new PrismaClient();

export const getBooks = async () => prisma.book.findMany({ include: { author: true } });

export const getBooksByCategory = async (categoria: string) => {
if (!Object.values(Category).includes(categoria as Category)) throw new Error('Categoría inválida');
return prisma.book.findMany({ where: { categoria: categoria as Category }, include: { author: true } });
};

export const getBookById = async (id: string) =>
prisma.book.findUnique({ where: { id: Number(id) }, include: { author: true } });

export const createBook = async (data: {
titulo: string;
descripcion: string;
categoria: Category;
imagen?: string;
authorId: number;
}) => {
return prisma.book.create({
    data: {
    title: data.titulo,
    description: data.descripcion,
    categoria: data.categoria,
    image: data.imagen ? data.imagen : 'https://via.placeholder.com/150',
    authorId: data.authorId
    }
});
};

export const updateBook = async (
id: string,
data: Partial<{ titulo: string; descripcion: string; categoria: Category; imagen: string; authorId: number }>
) => prisma.book.update({
where: { id: Number(id) },
data: {
    ...(data.titulo && { title: data.titulo }),
    ...(data.descripcion && { description: data.descripcion }),
    ...(data.categoria && { categoria: data.categoria }),
    ...(data.imagen && { image: data.imagen }),
    ...(data.authorId && { authorId: data.authorId })
}
});

export const deleteBook = async (id: string) => {
await prisma.book.delete({ where: { id: Number(id) } });
return true;
};