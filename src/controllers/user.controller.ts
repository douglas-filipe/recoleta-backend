import { Request, Response } from "express"
import { CreateUserService } from "../services/user.service"

export const CreateUserController = async (req: Request, res: Response) => {
    try {
        const user = await CreateUserService(req.body)
        res.status(201).json(user)
    } catch (e) {
        res.status(400).json({ message: (e as Error).message })
    }
}