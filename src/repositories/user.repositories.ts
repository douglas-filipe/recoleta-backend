import { ICreateUser } from "../@types/user.types"
import { prisma } from "../services/prisma.service"

export const create = (body: ICreateUser) => {
    return prisma.user.create({
        data: body,
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true
        }
    })
}


export const getByEmail = async (email: string) => {
    const user = await prisma.user.findFirst({where: { email }, rejectOnNotFound: true});
    return user;
}