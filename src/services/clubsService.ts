import { clubs } from "@prisma/client";
import clubsRepository from "../repositories/clubsRepository";
import clubsUtils from "../utils/clubsUtils";

export type CreateClubData = Omit<clubs, "id">

async function createClub(newClub: CreateClubData) {
  await clubsUtils.validadeClubExist(newClub.name)
  
  return await clubsRepository.createClub(newClub);
}

async function getClubById(clubId: number) {
  await clubsUtils.validateClubExistById(clubId)

  return await clubsRepository.getClubById(clubId)
}

async function getClubs(string: string) {
  return await clubsRepository.getClubs(string)
}

const clubsService ={
  createClub,
  getClubById,
  getClubs
}

export default clubsService