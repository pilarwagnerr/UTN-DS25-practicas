import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/user.service';
import { userSchema, updateUserSchema } from '../validations/user.validation';

export const getAllUsers = async ( req: Request, res: Response, next: NextFunction) => {
try {
    const users = await userService.getUsers();
    res.json({ success: true, users, total: users.length });
} catch (error) {
    next(error);
}
};

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ success: false, message: 'ID inválido' });

    const user = await userService.getUserById(id);
    if (!user) return res.status(404).json({ success: false, message: 'Usuario no encontrado' });

    res.json({ success: true, user });
} catch (error) {
    next(error);
}
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
try {
    const data = userSchema.parse(req.body); 
    const user = await userService.createUser(data);
    res.status(201).json({ success: true, user, message: 'Usuario creado correctamente' });
} catch (error: any) {
    if (error.name === 'ZodError') {
    return res.status(400).json({ success: false, errors: error.errors });
    }
    next(error);
}
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ success: false, message: 'ID inválido' });

    const data = updateUserSchema.parse(req.body); 
    const user = await userService.updateUser(id, data);

    res.json({ success: true, user, message: 'Usuario actualizado correctamente' });
} catch (error: any) {
    if (error.name === 'ZodError') {
    return res.status(400).json({ success: false, errors: error.errors });
    }
    next(error);
}
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ success: false, message: 'ID inválido' });

    await userService.deleteUser(id);
    res.json({ success: true, message: 'Usuario eliminado correctamente' });
} catch (error) {
    next(error);
}
};