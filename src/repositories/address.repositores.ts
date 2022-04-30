import { ICreateAddress } from "../@types/address.types"
import { prisma } from "../services/prisma.service"

export const createAddress = (body: ICreateAddress) => {
    return prisma.address.create({
        data: body,
    })
}
