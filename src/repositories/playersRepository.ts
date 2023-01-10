import prisma from "../config/database";
import { players } from "@prisma/client";
import { CreatePlayerData } from "../services/playersService";

async function createPlayer(newPlayer: CreatePlayerData) {
  return await prisma.players.create({
    data: newPlayer
  })
}

async function getPlayers(string: string) {
  const players = await prisma.players.findMany({
    where: {
      name: {
        startsWith: string,
        mode: 'insensitive'
      }
    },
    select: {
      id: true,
      name: true,
      photo: true
    }
  })

  return players
}

async function getPlayer(player: CreatePlayerData) {
  const playerExist = await prisma.players.findFirst({
    where: {
      name: player.name,
      age: player.age,
      nationality: player.nationality,
    }
  })

  return playerExist
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
  getPlayers,
  getPlayer,
  updatePlayerAge
}

export default playerRepository