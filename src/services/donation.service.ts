import { createDonation, listDonations } from "../repositories/donation.repositories";
import { ICreateDonation } from "../@types/donation.types";

export const CreateDonationService = (body: ICreateDonation) => {
    try {
        return createDonation(body)
    } catch (e) {
        throw new Error("Error ao criar a doação")
    }
}

export const ListDonationsService = () => {
    return listDonations()
}