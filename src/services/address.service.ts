import { createAddress } from "../repositories/address.repositores";
import { ICreateAddress } from "../@types/address.types";

export const CreateAddressService = (body: ICreateAddress) => {
    try {
        return createAddress(body)
    } catch (e) {
        throw new Error("Error ao criar o endereço")
    }
}