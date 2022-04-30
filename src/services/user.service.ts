import { ICreateUser } from "../@types/user.types";
import { create } from "../repositories/user.repositories";
import bcrypt from 'bcrypt'

export const CreateUserService = (body: ICreateUser) => {
    try {
        const hashedPassword = bcrypt.hashSync(body.password, 10)
        body.password = hashedPassword
        return create(body)
    } catch (e) {
        throw new Error("Error ao criar a conta")
    }
}