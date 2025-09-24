import { Request, Response, NextFunction } from 'express';
import * as contactService from '../services/contact.service';

export const getAllMessages = async (req: Request, res: Response, next: NextFunction) => {
try {
    const messages = await contactService.getMessages();
    res.json({ success: true, messages, total: messages.length });
} catch (error) {
    next(error);
}
};

export const getMessage = async (req: Request, res: Response, next: NextFunction) => {
try {
    const msg = await contactService.getMessageById(req.params.id);
    if (!msg) return res.status(404).json({ success: false, message: 'Mensaje no encontrado' });
    res.json({ success: true, msg });
} catch (error) {
    next(error);
}
};

export const createMessage = async (req: Request, res: Response, next: NextFunction) => {
try {
    const msg = await contactService.createMessage(req.body);
    res.status(201).json({ success: true, msg, message: 'Mensaje enviado correctamente' });
} catch (error) {
    next(error);
}
};

export const deleteMessage = async (req: Request, res: Response, next: NextFunction) => {
try {
    await contactService.deleteMessage(req.params.id);
    res.json({ success: true, message: 'Mensaje eliminado correctamente' });
} catch (error) {
    next(error);
}
};