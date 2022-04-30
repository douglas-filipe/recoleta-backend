import { Request, Response } from "express"
import { CreateMessageService, ListAllMessagesService } from "../services/chat.service"

export const CreateMessageController = async (req: Request, res: Response) => {
    try {
        const message = await CreateMessageService(req.body)
        res.status(201).json(message)
    } catch (e) {
        res.status(400).json({ message: (e as Error).message })
    }
}


export const ListAllMessagesController = async (req: Request, res: Response) => {
    try {
        const messages = await ListAllMessagesService(req.params.userFrom, req.params.userTo)
        res.status(201).json(messages)
    } catch (e) {
        res.status(400).json({ message: (e as Error).message })
    }
}
