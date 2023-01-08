import prisma from "../config/database";
import { CreateClubData } from "../services/clubsService";

async function createClub(newClub: CreateClubData) {
  return await prisma.clubs.create({
    data: newClub
  })
}

const clubsRepository = {
  createClub
}

export default clubsRepository