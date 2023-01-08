import { players } from "@prisma/client";
import playerRepository from "../repositories/playersRepository";

export type CreatePlayerData = Omit<players, "id">

async function createPlayer(newPlayer: CreatePlayerData) {
  return await playerRepository.createPlayer(newPlayer)
}

async function updatePlayerAge(player: players) {
  return await playerRepository.updatePlayerAge(player)
}

const playerService = {
  createPlayer,
  updatePlayerAge
}

export default playerService