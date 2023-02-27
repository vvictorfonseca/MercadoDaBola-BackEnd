import { Request, Response } from "express";
import adminService, { CreateAdminData } from "../services/adminService";

async function signUpAdmin(req: Request, res: Response) {
  const newAdmin: CreateAdminData = req.body

  await adminService.signUpAdmin(newAdmin)

  return res.sendStatus(201)
}

async function signInAdmin(req: Request, res: Response) {
  const newLogin: CreateAdminData = req.body

  const token = await adminService.signInAdmin(newLogin)

  return res.status(200).send(token)
}

export { signUpAdmin, signInAdmin }