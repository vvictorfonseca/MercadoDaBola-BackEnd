import { clubs } from "@prisma/client";
import clubsRepository from "../repositories/clubsRepository";

export type CreateClubData = Omit<clubs, "id">

async function createClub(newClub: CreateClubData) {
  return await clubsRepository.createClub(newClub);
}

async function getClubs(string: string) {
  return await clubsRepository.getClubs(string)
}

const clubsService ={
  createClub,
  getClubs
}

export default clubsService