import { Request, Response } from "express";
import LikesService, { CreateNewLike } from "../services/likesService";

async function postLike(req: Request, res: Response) {
  const newLike: CreateNewLike = req.body

  await LikesService.postLike(newLike)

  return res.sendStatus(201);
}

async function getLikesByTransferId(req: Request, res: Response) {
  const transferId: number = parseInt(req.params.transferId)

  const likesResult = await LikesService.getLikesByTransferId(transferId)
  console.log(likesResult)

  return res.status(200).send(likesResult)
}

export { postLike, getLikesByTransferId }