import { Request, Response } from "express"
import { CreateAddressService } from "../services/address.service"

export const CreateAddressController = async (req: Request, res: Response) => {
    try {
        const address = await CreateAddressService(req.body)
        res.status(201).json(address)
    } catch (e) {
        res.status(400).json({ message: (e as Error).message })
    }
}