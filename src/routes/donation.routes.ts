import { Router } from "express";
import { CreateDonationController, ListDonationsController } from "../controllers/donation.controller";
import { validation } from "../middlewares/validation.middleware";
import { DonationSchema } from "../schemas/donation.schema";

const route = Router()

route.post("/donation", validation(DonationSchema), CreateDonationController)
route.get("/donations", ListDonationsController)

export default route