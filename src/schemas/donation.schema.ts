import * as yup from "yup"

export const DonationSchema = yup.object().shape({
    name: yup.string().strict().required(),
    addressId: yup.string().strict().required(),
    userId: yup.string().strict().required(),
    description: yup.string().strict().required(),
    latitude: yup.string().strict().required(),
    longitude: yup.string().strict().required(),
    typeDonation: yup.string().strict().required(),
})