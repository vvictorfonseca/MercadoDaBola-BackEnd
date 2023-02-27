import { admin } from "@prisma/client";
import adminRepository from "../repositories/adminRepository";
import adminUtils from "../utils/adminUtils";

export type CreateAdminData = Omit<admin, "id">

async function signUpAdmin(newAdmin: CreateAdminData) {
  await adminUtils.validateEmailExist(newAdmin.email)
  
  const passwordEncrypted = await adminUtils.encryptPassword(newAdmin.password)
  newAdmin.password = passwordEncrypted

  return await adminRepository.signUpAdmin(newAdmin)
}

const adminService = {
  signUpAdmin
}

export default adminService