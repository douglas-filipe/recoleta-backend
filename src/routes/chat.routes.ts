import { Router } from "express";
import { CreateMessageController, ListAllMessagesController } from "../controllers/chat.controller";
import { validation } from "../middlewares/validation.middleware";
import { MessageSchema } from "../schemas/chat.schema";

const route = Router()

route.post("/message", validation(MessageSchema), CreateMessageController)
route.get("/messages/:userFrom/:userTo", ListAllMessagesController)

export default route

