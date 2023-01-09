import prisma from "../config/database";
import { transfers, Status } from "@prisma/client";
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

async function getTransfers() {
  const transfers = await prisma.transfers.findMany({
    select: {
      id: true,
      status: true,
      transferDate: true,

      player: {
        select: {
          id: true,
          name: true,
          age:true,
          photo: true
        }
      },
      fromRelation: {
        select: {
          name: true,
          photo: true
        }
      },
      toRelation: {
        select: {
          name: true,
          photo: true
        }
      }
    }
  })

  return transfers
}

const transfersRepository = {
  createOrUpdateTransfer,
  getTransfers
}

export default transfersRepository