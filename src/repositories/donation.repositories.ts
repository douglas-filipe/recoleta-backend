import { ICreateDonation } from "../@types/donation.types"
import { prisma } from "../services/prisma.service"

export const createDonation = (body: ICreateDonation) => {
    return prisma.donation.create({
        data: body,
    })
}

export const listDonations = () => {
    return prisma.donation.findMany({ include: { address: true, user: true } })
}