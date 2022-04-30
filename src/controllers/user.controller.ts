import { Request, Response } from "express"
import { CreateUserService, loginService } from "../services/user.service"

export const CreateUserController = async (req: Request, res: Response) => {
    try {
        const user = await CreateUserService(req.body)
        res.status(201).json(user)
    } catch (e) {
        res.status(400).json({ message: (e as Error).message })
    }
}


export const login = async (req: Request, res: Response) => {
    try{
        const { email, password } = req.body;
        const token = await loginService(email, password);
        return res.json({token: token});
    }catch(e: any){
        if ( e.name === 'NotFoundError') return res.status(404).json({error: "user not registred"})
        return res.status(400).json({message: e})
    }
}