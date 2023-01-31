import { Request, Response } from "express";
import playerService, { CreatePlayerData } from "../services/playersService";

async function createPlayer(req: Request, res: Response) {
  const newPlayer: CreatePlayerData = req.body

  await playerService.createPlayer(newPlayer)

  return res.sendStatus(201)
}

async function getPlayers(req: Request, res: Response) {
  const string: string = req.params.string

  const players = await playerService.getPlayers(string)

  return res.status(200).send(players)
}

async function getPlayerById(req: Request, res: Response) {
  const playerId: number = parseInt(req.params.playerId)

  const player = await playerService.getPlayerById(playerId)

  return res.status(200).send(player)
}

export { createPlayer, getPlayers, getPlayerById }