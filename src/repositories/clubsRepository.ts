import prisma from "../config/database";
import { CreateClubData } from "../services/clubsService";

async function createClub(newClub: CreateClubData) {
  return await prisma.clubs.create({
    data: newClub
  })
}

async function getClubByName(name: string) {
  const club = await prisma.clubs.findFirst({
    where: {
      name
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
  getClubs
}

export default clubsRepository