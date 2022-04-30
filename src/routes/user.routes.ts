import { Router } from "express";
import { CreateUserController, getUserByIdController, login } from "../controllers/user.controller";
import { validation } from "../middlewares/validation.middleware";
import { LoginSchema, UserSchema } from "../schemas/user.schema";

const route = Router()

route.post("/register", validation(UserSchema), CreateUserController)
route.post("/login", validation(LoginSchema), login)
route.get("/users/:id", getUserByIdController)

export default route