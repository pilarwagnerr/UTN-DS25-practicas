export interface Book {
id: string;
titulo: string;
descripcion: string;
categoria: string;
imagen: string;
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