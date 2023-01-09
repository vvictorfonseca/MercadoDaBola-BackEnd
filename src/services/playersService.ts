import { players } from "@prisma/client";
import playerRepository from "../repositories/playersRepository";

export type CreatePlayerData = Omit<players, "id">

async function createPlayer(newPlayer: CreatePlayerData) {
  return await playerRepository.createPlayer(newPlayer)
}

async function getPlayers(string: string) {
  return await playerRepository.getPlayers(string)
}

async function updatePlayerAge(player: players) {
  return await playerRepository.updatePlayerAge(player)
}

const playerService = {
  createPlayer,
  getPlayers,
  updatePlayerAge
}

export default playerService