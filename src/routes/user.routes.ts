import { Router } from "express";
import { CreateUserController, login } from "../controllers/user.controller";
import { validation } from "../middlewares/validation.middleware";
import { LoginSchema, UserSchema } from "../schemas/user.schema";

const route = Router()

route.post("/register", validation(UserSchema), CreateUserController)
route.post("/login",validation(LoginSchema), login)

export default route