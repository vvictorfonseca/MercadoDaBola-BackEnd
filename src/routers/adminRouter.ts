import { Router } from "express";
import { signUpAdmin } from "../controllers/adminController";
import { validateSchema } from "../middlewares/validateSchema";
import { adminSchema } from "../schemas/adminSchema";

const adminRouter = Router()

adminRouter.post("/signUp", validateSchema(adminSchema), signUpAdmin)

export default adminRouter