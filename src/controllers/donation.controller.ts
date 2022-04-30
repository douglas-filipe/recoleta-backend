import { Request, Response } from "express"
import { CreateDonationService, ListDonationsService } from "../services/donation.service"

export const CreateDonationController = async (req: Request, res: Response) => {
    try {
        const donation = await CreateDonationService(req.body)
        res.status(201).json(donation)
    } catch (e) {
        res.status(400).json({ message: (e as Error).message })
    }
}

export const ListDonationsController = async (req: Request, res: Response) => {
    const donations = await ListDonationsService()
    res.status(200).json(donations)

}