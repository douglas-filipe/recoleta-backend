import * as yup from "yup"

export const AddressSchema = yup.object().shape({
    city: yup.string().strict().required(),
    zipCode: yup.string().strict().required(),
    number: yup.number().strict().required(),
    street: yup.string().strict().required(),
    state: yup.string().strict().required(),
    userId: yup.string().strict().required(),
})
