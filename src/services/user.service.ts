import { ICreateUser } from "../@types/user.types";
import { create, getByEmail } from "../repositories/user.repositories";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const CreateUserService = (body: ICreateUser) => {
    try {
        const hashedPassword = bcrypt.hashSync(body.password, 10)
        body.password = hashedPassword
        return create(body)
    } catch (e) {
        throw new Error("Error ao criar a conta")
    }
}


export const loginService = async (email: string, password: string) => {
    const userTarget = await getByEmail(email);
    const match = await bcrypt.compare(password, userTarget?.password as string);
    
    if(!match){
        throw 'incorrect password'
    }
    
    const token = jwt.sign({ id: userTarget?.id}, process.env.SECRET as string, {expiresIn: '15d'})

    return token
}
