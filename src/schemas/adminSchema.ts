import Joi from "joi";
import { CreateAdminData } from "../services/adminService";

const adminSchema = Joi.object<CreateAdminData>({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
})

export { adminSchema }