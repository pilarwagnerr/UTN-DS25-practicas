import { Request, Response, NextFunction } from 'express'; 
import * as bookService from '../services/book.service'; 
import { BookResponse } from '../types/book.types';

export const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
try {
    const { categoria } = req.query;
    const books = categoria
    ? await bookService.getBooksByCategory(String(categoria))
    : await bookService.getBooks();
    res.json({ success: true, books: books as any, total: books.length }); 
} catch (error) {
    next(error);
}
};

export const getBookById = async (req: Request, res: Response<BookResponse>, next: NextFunction) => {
try {
    const book = await bookService.getBookById(req.params.id);
    if (!book) return res.status(404).json({ success: false, message: 'Libro no encontrado' });
    res.json({ success: true, book: book as any, message: 'Libro obtenido correctamente' }); 
} catch (error) {
    next(error);
}
};

export const createBook = async (req: Request, res: Response<BookResponse>, next: NextFunction) => {
try {
    const newBook = await bookService.createBook(req.body);
    res.status(201).json({ success: true, book: newBook as any, message: 'Libro creado correctamente' }); 
} catch (error) {
    next(error);
}
};

export const updateBook = async (req: Request, res: Response<BookResponse>, next: NextFunction) => {
try {
    const updatedBook = await bookService.updateBook(req.params.id, req.body);
    res.json({ success: true, book: updatedBook as any, message: 'Libro actualizado correctamente' }); 
} catch (error) {
    next(error);
}
};

export const deleteBook = async (req: Request, res: Response<BookResponse>, next: NextFunction) => {
try {
    await bookService.deleteBook(req.params.id);
    res.json({ success: true, message: `Libro con id ${req.params.id} eliminado correctamente` });
} catch (error) {
    next(error);
}
};
