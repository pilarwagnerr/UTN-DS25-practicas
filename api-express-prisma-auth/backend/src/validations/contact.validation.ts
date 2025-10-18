import { z } from 'zod';

export const contactSchema = z.object({
nombre: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
apellido: z.string().min(2, { message: "El apellido debe tener al menos 2 caracteres" }),
email: z.string().email({ message: "El email no es válido" }),
mensaje: z.string().min(5, { message: "El mensaje debe tener al menos 5 caracteres" }),
});