export interface LoginRequest {
email: string;
password: string;
}

export interface LoginResponse {
success: boolean;
data: {
    user: {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    sexo?: string;
    temaFavorito?: string;
    role: 'USER' | 'ADMIN';
    createdAt?: Date;
    };
    token: string;
};
}
