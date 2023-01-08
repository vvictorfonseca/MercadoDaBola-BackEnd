import prisma from "../config/database";
import { players } from "@prisma/client";
import { CreatePlayerData } from "../services/playersService";

async function createPlayer(newPlayer: CreatePlayerData) {
  return await prisma.players.create({
    data: newPlayer
  })
}

async function updatePlayerAge(player: players) {
  return await prisma.players.update({
    where: {
      id: player.id
    },
    data: {
      age: player.age++
    }
  })
}

const playerRepository = {
  createPlayer,
  updatePlayerAge
}

export default playerRepository