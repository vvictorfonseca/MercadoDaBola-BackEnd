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

async function getTransfer(newTransfer: transfers) {
  let transfer: transfers | null;
  if (newTransfer.id) {
    transfer = await prisma.transfers.findFirst({
      where: {
        id: newTransfer.id,
        playerId: newTransfer.playerId,
        from: newTransfer.from,
        to: newTransfer.to
      }
    })
  } else {
    transfer = await prisma.transfers.findFirst({
      where: {
        playerId: newTransfer.playerId,
        from: newTransfer.from,
        to: newTransfer.to
      }
    })
  }

  return transfer
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
          age: true,
          position: true,
          nationality: true,
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
    },
    orderBy: {
      id: 'desc'
    }
  })

  return transfers
}

async function getTransferByPlayerId(playerId: number) {
  const transfer = await prisma.transfers.findFirst({
    where: {
      playerId
    },
    select: {
      id: true,
      status: true,
      transferDate: true,

      player: {
        select: {
          id: true,
          name: true,
          age: true,
          position: true,
          nationality: true,
          photo: true
        }
      },
      fromRelation: {
        select: {
          id: true,
          name: true,
          photo: true
        }
      },
      toRelation: {
        select: {
          id: true,
          name: true,
          photo: true
        }
      }
    }
  })

  return transfer
}

const transfersRepository = {
  createOrUpdateTransfer,
  getTransfer,
  getTransfers,
  getTransferByPlayerId
}

export default transfersRepository