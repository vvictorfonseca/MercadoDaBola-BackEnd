import { transfers } from "@prisma/client";
import transfersRepository from "../repositories/transfersRepository";

export type CreateTransferData = Omit<transfers, "id">

async function createOrUpdateTransfer(newTransfer: CreateTransferData, updateTransfer: transfers) {
  return await transfersRepository.createOrUpdateTransfer(newTransfer, updateTransfer)
}

const transfersService = {
  createOrUpdateTransfer
}

export default transfersService

