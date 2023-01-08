import { clubs } from "@prisma/client";
import clubsRepository from "../repositories/clubsRepository";

export type CreateClubData = Omit<clubs, "id">

async function createClub(newClub: CreateClubData) {
  return await clubsRepository.createClub(newClub);
}

const clubsService ={
  createClub
}

export default clubsService