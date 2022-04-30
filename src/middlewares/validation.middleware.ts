import { NextFunction, Request, Response } from "express";
import { SchemaOf } from "yup";
import { ICreateAddress } from "../@types/address.types";
import { ICreateDonation } from "../@types/donation.types";
import { ICreateUser, ILogin } from "../@types/user.types";

interface IerrorsYup {
    errors: [string];
}

export const validation = (schema: SchemaOf<ICreateUser | ILogin | ICreateAddress | ICreateDonation>) =>
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