import { Request, Response } from "express";
import adminService, { CreateAdminData } from "../services/adminService";

async function signUpAdmin(req: Request, res: Response) {
  const newAdmin: CreateAdminData = req.body

  await adminService.signUpAdmin(newAdmin)

  return res.sendStatus(201)
}

export { signUpAdmin }