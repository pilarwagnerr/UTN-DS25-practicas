import express from 'express';
import cors from 'cors';
import { bookRoutes } from './routes/book.routes';
import { logRequest } from './middlewares/logger.middleware';
import { handleError } from './middlewares/error.middleware';
import { json } from 'body-parser';

const app = express();
app.use(json()); 
app.use(logRequest); 
app.use(cors({
    origin: '*'
})); 
app.use('/api/books', bookRoutes); 
app.use(handleError);
app.get('/', (req, res) => {
res.send('BIENVENIDO A LA API DE LIBROS');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
export default app;