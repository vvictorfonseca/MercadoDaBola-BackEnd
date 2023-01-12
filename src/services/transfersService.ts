import { transfers, Status } from "@prisma/client";
import transfersRepository from "../repositories/transfersRepository";
import transfersUtils from "../utils/transfersUtils";

export type CreateTransferData = Omit<transfers, "id">

async function createOrUpdateTransfer(newTransfer: CreateTransferData, updateTransfer: transfers) {
  await transfersUtils.validateTransferExist(newTransfer, updateTransfer)
  await transfersUtils.validateStatus(newTransfer.status)

  return await transfersRepository.createOrUpdateTransfer(newTransfer, updateTransfer)
}

async function getTransfersByStatus(status: Status) {
  const transfers = await transfersRepository.getTransfers()

  const transfersByStatus = transfers.filter((transfer) => transfer.status == status)

  return transfersByStatus
}

const transfersService = {
  createOrUpdateTransfer,
  getTransfersByStatus
}

export default transfersService

