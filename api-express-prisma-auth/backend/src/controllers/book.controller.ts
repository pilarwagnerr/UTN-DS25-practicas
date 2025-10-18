import { Request, Response, NextFunction } from 'express';
import * as bookService from '../services/book.service';
import { Category } from '@prisma/client';
import { BookResponse, BooksListResponse } from '../types/book.types';

export const getAllBooks = async (req: Request, res: Response<BooksListResponse>, next: NextFunction) => {
try {
    const { categoria } = req.query;

    if (categoria && !Object.values(Category).includes(categoria as Category)) {
    return res.status(400).json({ success: false, message: 'Categoría inválida', books: [], total: 0 });
    }

    const books = categoria
    ? await bookService.getBooksByCategory(categoria as Category)
    : await bookService.getBooks();

    res.json({ success: true, books, total: books.length });
} catch (error) {
    next(error);
}
};

export const getBookById = async (req: Request, res: Response<BookResponse>, next: NextFunction) => {
try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ success: false, message: 'ID inválido' });

    const book = await bookService.getBookById(id);
    if (!book) return res.status(404).json({ success: false, message: 'Libro no encontrado' });

    res.json({ success: true, book, message: 'Libro obtenido correctamente' });
} catch (error) {
    next(error);
}
};

export const createBook = async (req: Request, res: Response<BookResponse>, next: NextFunction) => {
try {
    const newBook = await bookService.createBook(req.body);
    res.status(201).json({ success: true, book: newBook, message: 'Libro creado correctamente' });
} catch (error) {
    next(error);
}
};

export const updateBook = async (req: Request, res: Response<BookResponse>, next: NextFunction) => {
try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ success: false, message: 'ID inválido' });

    const updatedBook = await bookService.updateBook(id, req.body);
    res.json({ success: true, book: updatedBook, message: 'Libro actualizado correctamente' });
} catch (error) {
    next(error);
}
};

export const deleteBook = async (req: Request, res: Response<BookResponse>, next: NextFunction) => {
try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ success: false, message: 'ID inválido' });

    const deletedBook = await bookService.deleteBook(id);
    res.json({ success: true, book: deletedBook, message: `Libro con id ${id} eliminado correctamente` });
} catch (error) {
    next(error);
}
};