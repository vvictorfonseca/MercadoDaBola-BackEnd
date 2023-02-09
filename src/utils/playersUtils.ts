import playerRepository from "../repositories/playersRepository"
import { CreatePlayerData } from "../services/playersService"

async function validatePlayerExist(newPlayer: CreatePlayerData) {
  const player = await playerRepository.getPlayer(newPlayer)

  if (player) {
    throw {type: "conflict", message: "This player is already registered!"}
  }

  return
}

async function validatePosition(newPlayer: CreatePlayerData) {
  const positions = ["Goleiro", "Zagueiro", "Volante", "Lateral", "Meia", "Atacante"]

  if (!positions.includes(newPlayer.position)) {
    throw {type: "not_allowed", message: "Insert a valid Position. Goleiro | Zagueiro | Lateral | Meia | Atacante"}
  }

  return
}

async function validateAge(newPlayer: CreatePlayerData) {
  
  if (newPlayer.age <= 14 || newPlayer.age >= 45) {
    throw {type: "not_allowed", message: "Insert a valid age. Between 14 and 45."}
  }

  return
}

async function validatePlayerExistById(playerId: number) {
  const player = await playerRepository.getPlayerById(playerId)

  if(!player) {
    throw {type: "not_found", message: "This player doesn't exist"}
  }

  return 
}

const playersUtils = {
  validatePlayerExist,
  validatePosition,
  validateAge,
  validatePlayerExistById
}

export default playersUtils