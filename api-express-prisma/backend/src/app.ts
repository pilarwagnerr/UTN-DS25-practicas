import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import { bookRoutes } from './routes/book.routes';
import { authorRoutes } from './routes/author.routes'
import { userRoutes } from './routes/user.routes';
import { contactRoutes } from './routes/contact.routes';
import { logRequest } from './middlewares/logger.middleware';
import { handleError } from './middlewares/error.middleware';

const app = express();
app.use(json()); 
app.use(logRequest); 
app.use(cors({
    origin: '*'
})); 
app.use('/api/books', bookRoutes); 
app.use('/api/users', userRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/authors', authorRoutes);

app.use(handleError);

app.get('/', ( req, res) => {
res.send('BIENVENIDO A LA API DE LIBROS CON PRISMA');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
export default app;