export interface Book {
id: number;
titulo: string;
descripcion: string;
categoria: 'CienciaFiccion' | 'Terror' | 'Infantil' | 'Romance';
imagen: string;
authorId: number;
author?: {
    id: number;
    name: string;
}
}

export interface BookResponse {
success: boolean;
book?: Book;
message: string;
}

export interface BooksListResponse {
success: boolean;
books: Book[];
total: number;
message?: string;
}