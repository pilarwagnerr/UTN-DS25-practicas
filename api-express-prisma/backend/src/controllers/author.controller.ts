import { Request, Response, NextFunction } from 'express';
import * as authorService from '../services/author.service';

export const getAllAuthors = async (req: Request, res: Response, next: NextFunction) => {
try {
    const authors = await authorService.getAuthors();
    res.json({ success: true, authors, total: authors.length });
} catch (error) {
    next(error);
}
};

export const getAuthor = async (req: Request, res: Response, next: NextFunction) => {
try {
    const author = await authorService.getAuthorById(req.params.id);
    if (!author) return res.status(404).json({ success: false, message: "Autor no encontrado" });
    res.json({ success: true, author, message: "Autor obtenido correctamente" });
} catch (error) {
    next(error);
}
};

export const createAuthor = async (req: Request, res: Response, next: NextFunction) => {
try {
    const author = await authorService.createAuthor(req.body);
    res.status(201).json({ success: true, author, message: "Autor creado correctamente" });
} catch (error) {
    next(error);
}
};

export const updateAuthor = async (req: Request, res: Response, next: NextFunction) => {
try {
    const author = await authorService.updateAuthor(req.params.id, req.body);
    res.json({ success: true, author, message: "Autor actualizado correctamente" });
} catch (error) {
    next(error);
}
};

export const deleteAuthor = async (req: Request, res: Response, next: NextFunction) => {
try {
    await authorService.deleteAuthor(req.params.id);
    res.json({ success: true, message: "Autor eliminado correctamente" });
} catch (error) {
    next(error);
}
};