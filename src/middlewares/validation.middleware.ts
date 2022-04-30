import { NextFunction, Request, Response } from "express";
import { SchemaOf } from "yup";
import { ICreateUser } from "../@types/user.types";

interface IerrorsYup {
    errors: [string];
}

export const validation = (schema: SchemaOf<ICreateUser>) =>
    async (req: Request, res: Response, next: NextFunction) => {
        const src = req.body
        try {
            await schema.validate(src, {
                abortEarly: false,
                stripUnknown: true,
            })
            next()
        } catch (e) {
            res.status(400).json({ error: (e as IerrorsYup).errors.join(", ") })
        }
    }