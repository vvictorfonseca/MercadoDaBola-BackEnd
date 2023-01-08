import { Request, Response } from "express";
import { transfers } from "@prisma/client";
import transfersService, { CreateTransferData } from "../services/transfersService";

async function createTransfer(req: Request, res: Response) {
  const newTransfer: CreateTransferData = req.body
  const updateTransfer: transfers = req.body

  await transfersService.createOrUpdateTransfer(newTransfer, updateTransfer)

  return res.sendStatus(201)
}

export default createTransfer