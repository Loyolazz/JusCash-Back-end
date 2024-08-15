import { Request, Response } from "express";
import { UserService } from "../services/userService";
import { CreateUserDTO } from "../dtos/userDto";

const userService = new UserService();

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const dto: CreateUserDTO = req.body;
        await userService.createUser(dto);
        res.status(201).send();
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar usuário" });
    }
};

export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId } = req.body;
        const user = await userService.getUserById(Number(userId));
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar usuário" });
    }
};
