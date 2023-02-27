import { Router } from "express";
import { signUpAdmin, signInAdmin } from "../controllers/adminController";
import { validateSchema } from "../middlewares/validateSchema";
import { adminSchema } from "../schemas/adminSchema";

const adminRouter = Router()

adminRouter.post("/signUp", validateSchema(adminSchema), signUpAdmin)
adminRouter.post("/signIn", validateSchema(adminSchema), signInAdmin)

export default adminRouter