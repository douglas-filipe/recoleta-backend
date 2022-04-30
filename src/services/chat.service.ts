import { ICreateMessage } from "../@types/chat.types";
import { createMessage, allMessagesFrom, allMessagesTo } from "../repositories/chat.repositories";

export const CreateMessageService = (body: ICreateMessage) => {
    try {
        return createMessage(body)
    } catch (e) {
        throw new Error("Error ao criar a mensagem")
    }
}

export const ListAllMessagesService = async (userFromId: string, toUserId: string) => {
    try {
        const messages = await allMessagesFrom(userFromId, toUserId)
        /* const messagesTo = await allMessagesTo(toUserId)
        if (messages.length === 0) {
            console.log("Messsages: ", messagesTo)
            return messagesTo
        }
        if (messages.length !== 0 && messagesTo.length !== 0) {
            console.log("Acertou")
            console.log("Mensagens: ", messages)
            console.log("MensagensTo: ", messagesTo)
            return messagesTo
        }
        if (messagesTo.length === 0) {
            console.log("MessagesTo: ", messages)
            return messagesTo
        }
        console.log("Fora do if: ", messages) */
        return messages
    } catch (e) {
        throw new Error("Error ao listar mensagens");
    }
}

