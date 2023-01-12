import { transfers } from "@prisma/client";
import transfersRepository from "../repositories/transfersRepository";
import { CreateTransferData } from "../services/transfersService";

async function validateTransferExist(newTransfer: CreateTransferData, transfer: transfers) {
  const transferExist = await transfersRepository.getTransfer(transfer)

  if (!transfer.id && transferExist) {
    throw {type: "conflict", message: "This transfer is already registered!"}
  
  } else if (transfer.id && !transferExist) {
    throw {type: "not_allowed", message: "This transfer doesn't exist!"}
  }
}

async function validateStatus(statusName: string) {
  const status = ["Melou", "Negociando", "Fechado"]

  if (!status.includes(statusName)) {
    throw {type: "not_allowed", message: "Insert a valid Status. Melou | Negociando | Fechado"}
  }
}

const transfersUtils = {
  validateTransferExist,
  validateStatus
}

export default transfersUtils