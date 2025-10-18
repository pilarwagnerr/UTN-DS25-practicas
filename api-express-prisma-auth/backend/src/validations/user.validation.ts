import { z } from 'zod';

export const userSchema = z.object({
nombre: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
apellido: z.string().min(2, { message: "El apellido debe tener al menos 2 caracteres" }),
contraseña: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
sexo: z.enum(['M', 'F', 'Otro'], { message: "Sexo inválido" }),
temaFavorito: z.string().min(1, { message: "El tema favorito no puede estar vacío" }),
});

export const updateUserSchema = userSchema.partial();