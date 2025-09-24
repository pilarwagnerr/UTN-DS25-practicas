import { z } from 'zod';

export const contactSchema = z.object({
nombre: z.string().min(2),
apellido: z.string().min(2),
email: z.string().email(),
mensaje: z.string().min(5),
});