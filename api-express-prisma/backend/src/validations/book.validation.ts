import { z } from 'zod';

export const bookSchema = z.object({
titulo: z.string().min(2, { message: "El título debe tener al menos 2 caracteres" }),
descripcion: z.string().min(5, { message: "La descripción debe tener al menos 5 caracteres" }).optional(),
categoria: z.enum(['CienciaFiccion','Terror','Infantil','Romance'], { message: "Categoría inválida" }),
imagen: z.string().url({ message: "Debe ser una URL válida" }).optional(),
authorId: z.coerce.number({ message: "El authorId debe ser un número" })
});

export const updateBookSchema = bookSchema.partial();