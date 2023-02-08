import prisma from "../config/database";
import { CreateNewLike } from "../services/likesService";

async function postLike(newLike: CreateNewLike) {
  return await prisma.likes.create({
    data: newLike
  })
}

async function getLikesByTransferId(transferId: number) {
  const likes = await prisma.likes.findMany({
    where: {
      transferId: transferId
    }
  })

  return likes
}

const likesRepository = {
  postLike,
  getLikesByTransferId
}

export default likesRepository