import * as yup from "yup"

export const MessageSchema = yup.object().shape({
    userFromId: yup.string().strict().required(),
    toUserId: yup.string().strict().required(),
    message: yup.string().strict().required(),
    roomId: yup.string().strict().required(),
})
