import { Router } from "express";
import { CreateUserController, getUserByIdController, login } from "../controllers/user.controller";
import { CreateAddressController } from "../controllers/address.controller";
import { validation } from "../middlewares/validation.middleware";
import { AddressSchema } from "../schemas/address.schema";
import { LoginSchema, UserSchema } from "../schemas/user.schema";

const route = Router()

route.post("/register", validation(UserSchema), CreateUserController)
route.post("/login", validation(LoginSchema), login)
route.get("/users/:id", getUserByIdController)
route.post("/address", validation(AddressSchema), CreateAddressController)

export default route