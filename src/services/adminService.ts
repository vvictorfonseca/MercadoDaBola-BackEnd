import { admin } from "@prisma/client";
import adminRepository from "../repositories/adminRepository";
import adminUtils from "../utils/adminUtils";

import jwt from "jsonwebtoken"

export type CreateAdminData = Omit<admin, "id">

async function signUpAdmin(newAdmin: CreateAdminData) {
  await adminUtils.validateEmailExist(newAdmin.email)
  
  const passwordEncrypted = await adminUtils.encryptPassword(newAdmin.password)
  newAdmin.password = passwordEncrypted

  return await adminRepository.signUpAdmin(newAdmin)
}

async function signInAdmin(newLogin: CreateAdminData) {
  const admin = await adminUtils.decryptPassword(newLogin)

  const expiresAt = { expiresIn: 60 * 60 * 24 };
  const key = process.env.JWT_SECRET!
  const token = jwt.sign(
    {id: admin.id, email: admin.email}, 
    key, 
    expiresAt
  )
  
  return token
}

const adminService = {
  signUpAdmin,
  signInAdmin
}

export default adminService