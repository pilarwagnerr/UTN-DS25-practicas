import { z } from 'zod';

export const userSchema = z.object({
nombre: z.string().min(2),
apellido: z.string().min(2),
contraseña: z.string().min(6),
sexo: z.enum(['M', 'F', 'Otro']),
temaFavorito: z.string().optional(),
});

export const updateUserSchema = userSchema.partial();