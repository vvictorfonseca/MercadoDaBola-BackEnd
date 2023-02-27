import prisma from "../config/database";
import { CreateAdminData } from "../services/adminService";

async function signUpAdmin(newAdmin: CreateAdminData) {
  return await prisma.admin.create({
    data: newAdmin
  })
}

async function getAdminByEmail(email: string) {
  const emailExist = await prisma.admin.findFirst({
    where: {
      email
    }
  })

  return emailExist
}

const adminRepository = {
  signUpAdmin,
  getAdminByEmail
}

export default adminRepository