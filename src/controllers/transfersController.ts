import { Request, Response } from "express";
import { transfers, Status } from "@prisma/client";
import transfersService, { CreateTransferData } from "../services/transfersService";

async function createOrUpdateTransfer(req: Request, res: Response) {
  const newTransfer: CreateTransferData = req.body
  const updateTransfer: transfers = req.body

  await transfersService.createOrUpdateTransfer(newTransfer, updateTransfer)

  return res.sendStatus(201)
}

async function getTransfersByStatus(req: Request, res: Response) {
  const status: string = req.params.status

  const transfers = await transfersService.getTransfersByStatus(status)

  return res.status(200).send(transfers)
}

export { createOrUpdateTransfer, getTransfersByStatus }