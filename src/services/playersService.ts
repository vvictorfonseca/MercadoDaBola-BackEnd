import { players } from "@prisma/client";
import playerRepository from "../repositories/playersRepository";
import playersUtils from "../utils/playersUtils";

export type CreatePlayerData = Omit<players, "id">

async function createPlayer(newPlayer: CreatePlayerData) {
  await playersUtils.validatePlayerExist(newPlayer)
  await playersUtils.validatePosition(newPlayer)
  await playersUtils.validateAge(newPlayer)
  
  return await playerRepository.createPlayer(newPlayer)
}

async function getPlayers(string: string) {
  return await playerRepository.getPlayers(string)
}

async function getPlayerById(playerId: number) {
  await playersUtils.validatePlayerExistById(playerId)

  return await playerRepository.getPlayerById(playerId)
}

async function updatePlayerAge(player: players) {
  return await playerRepository.updatePlayerAge(player)
}

const playerService = {
  createPlayer,
  getPlayers,
  getPlayerById,
  updatePlayerAge
}

export default playerService