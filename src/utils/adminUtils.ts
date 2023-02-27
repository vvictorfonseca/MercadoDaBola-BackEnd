import { CreateAdminData } from "../services/adminService";
import adminRepository from "../repositories/adminRepository";

import bcrypt from "bcrypt"

async function validateEmailExist(email: string) {
  const emailExist = await adminRepository.getAdminByEmail(email)

  if (emailExist) {
    throw {type: "not_allowed", message: "This email is already registered!"}
  }
}

async function encryptPassword(password: string) {
  const SALT = 10

  const passwordEncrypted = bcrypt.hashSync(password, SALT)

  return passwordEncrypted
}

async function decryptPassword(newLogin: CreateAdminData) {
  const admin = await adminRepository.getAdminByEmail(newLogin.email)
  if (admin) {
    const isCorrectPassword = bcrypt.compareSync(newLogin.password, admin.password)

    if (!isCorrectPassword) {
      throw { type: "not_found", message: "invalid password" }
    }
  }

  if (!admin) {
    throw { type: "not_found", message: "this email is invalid" }
  }

  return admin
}

const adminUtils = {
  validateEmailExist,
  encryptPassword,
  decryptPassword
}

export default adminUtils