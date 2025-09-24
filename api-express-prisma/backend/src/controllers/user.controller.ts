import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/user.service';

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
try {
    const users = await userService.getUsers();
    res.json({ success: true, users, total: users.length });
} catch (error) {
    next(error);
}
};

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
try {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
    res.json({ success: true, user });
} catch (error) {
    next(error);
}
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
try {
    const user = await userService.createUser(req.body);
    res.status(201).json({ success: true, user, message: 'Usuario creado correctamente' });
} catch (error) {
    next(error);
}
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.json({ success: true, user, message: 'Usuario actualizado correctamente' });
} catch (error) {
    next(error);
}
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
try {
    await userService.deleteUser(req.params.id);
    res.json({ success: true, message: 'Usuario eliminado correctamente' });
} catch (error) {
    next(error);
}
};