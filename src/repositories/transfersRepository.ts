import prisma from "../config/database";
import { transfers } from "@prisma/client";
import { CreateTransferData } from "../services/transfersService";

async function createOrUpdateTransfer(newTransfer: CreateTransferData, updateTransfer: transfers) {
  if (updateTransfer.id) {
    return await prisma.transfers.update({
      where: {
        id: updateTransfer.id
      },
      data: updateTransfer
    })
  
  } else {
    return await prisma.transfers.create({
      data: newTransfer
    })
  }
}

const transfersRepository = {
  createOrUpdateTransfer
}

export default transfersRepository