import { z } from 'zod';

export const authorSchema = z.object({
name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" })
});

export const updateAuthorSchema = authorSchema.partial();