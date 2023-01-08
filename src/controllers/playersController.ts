import { Request, Response } from "express";
import playerService, { CreatePlayerData } from "../services/playersService";

async function createPlayer(req: Request, res: Response) {
  const newPlayer: CreatePlayerData = req.body

  await playerService.createPlayer(newPlayer)

  return res.sendStatus(201)
}

export default createPlayer