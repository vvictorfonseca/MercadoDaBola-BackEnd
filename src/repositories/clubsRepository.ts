import prisma from "../config/database";
import { CreateClubData } from "../services/clubsService";

async function createClub(newClub: CreateClubData) {
  return await prisma.clubs.create({
    data: newClub
  })
}

async function getClubByName(clubName: string) {
  const club = await prisma.clubs.findFirst({
    where: {
      name: clubName
    }
  })

  return club
}

async function getClubById(clubId: number) {
  const club = await prisma.clubs.findFirst({
    where: {
      id: clubId
    },
    select: {
      id: true,
      name: true,
      photo: true
    }
  })

  return club
}

async function getClubs(string: string) {
  const clubs = await prisma.clubs.findMany({
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

  return clubs
}

const clubsRepository = {
  createClub,
  getClubByName,
  getClubById,
  getClubs
}

export default clubsRepository