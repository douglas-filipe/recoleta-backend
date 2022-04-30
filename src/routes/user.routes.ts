import { Router } from "express";
import { CreateUserController } from "../controllers/user.controller";
import { validation } from "../middlewares/validation.middleware";
import { UserSchema } from "../schemas/user.schema";

const route = Router()

route.post("/register", validation(UserSchema), CreateUserController)

export default route