import { likes } from "@prisma/client";
import { string } from "joi";
import likesRepository from "../repositories/likesRepository";

export type CreateNewLike = Omit<likes, "id">

async function postLike(newLike: CreateNewLike) {
  return await likesRepository.postLike(newLike)
}

async function getLikesByTransferId(transferId: number) {
  const allVotes = await likesRepository.getLikesByTransferId(transferId)

  let likes = 0;
  let dislikes = 0;
  allVotes.forEach(item => item.liked == true ? likes++ : dislikes++)

  const likesPorcentage = (likes / allVotes.length * 100).toFixed(1)
  const dislikesPorcentage = (dislikes / allVotes.length * 100).toFixed(1);

  const response = {
    likesResult: parseInt(likesPorcentage),
    dislikesResult: parseInt(dislikesPorcentage)
  }

  return response
}

const LikesService = {
  postLike,
  getLikesByTransferId
}

export default LikesService