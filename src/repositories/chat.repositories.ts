import { ICreateMessage } from "../@types/chat.types"
import { prisma } from "../services/prisma.service"

export const createMessage = (body: ICreateMessage) => {
    return prisma.message.create({ data: body, include: { userFrom: true, toUser: true } })
}

export const allMessagesFrom = (userFromId: string, toUserId: string) => {
    return prisma.message.findMany({ where: { OR: [{ userFromId }, { toUserId }] }, include: { userFrom: true, toUser: true } })
}

export const allMessagesTo = (toUserId: string) => {
    return prisma.message.findMany({ where: { toUserId }, include: { userFrom: true, toUser: true } })
}
