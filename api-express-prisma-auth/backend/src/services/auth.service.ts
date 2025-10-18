import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import { LoginRequest, LoginResponse } from '../types/auth.types';

const prisma = new PrismaClient();

// Tipo del payload del JWT
type JWTPayload = { 
sub: number;
email: string;
role: Role;
};

export async function login(data: LoginRequest): Promise<LoginResponse['data']> {
  // 1. Buscar usuario por email
const user = await prisma.user.findUnique({
    where: { email: data.email }
});

if (!user) {
    const error = new Error('Credenciales inválidas') as any;
    error.statusCode = 401;
    throw error;
}

  // 2. Verificar contraseña
const validPassword = await bcrypt.compare(data.password, user.password);
if (!validPassword) {
    const error = new Error('Credenciales inválidas') as any;
    error.statusCode = 401;
    throw error;
}

  // 3. Verificar JWT_SECRET
const JWT_SECRET = process.env.JWT_SECRET as Secret | undefined;
if (!JWT_SECRET) {
    throw new Error('Falta JWT_SECRET en .env');
}
const EXPIRES_IN = process.env.JWT_EXPIRES_IN ?? '2h';

  // 4. Crear payload y token
const payload: JWTPayload = {
    sub: user.id,
    email: user.email,
    role: user.role as Role
};

const token = jwt.sign(payload, JWT_SECRET, { expiresIn: EXPIRES_IN } as SignOptions);

  // 5. Retornar usuario sin contraseña
const { password, ...userWithoutPassword } = user;
    return {
    user: userWithoutPassword,
    token
};
}