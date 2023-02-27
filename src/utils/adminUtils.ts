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

const adminUtils = {
  validateEmailExist,
  encryptPassword
}

export default adminUtils