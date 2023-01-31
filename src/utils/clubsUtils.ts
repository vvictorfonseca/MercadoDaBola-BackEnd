import clubsRepository from "../repositories/clubsRepository";

async function validadeClubExist(clubName: string) {
  const club = await clubsRepository.getClubByName(clubName)

  if (club) {
    throw {type: "conflict", message: "This club is already registered!"}
  }
}

async function validateClubExistById(clubId: number) {
  const club = await clubsRepository.getClubById(clubId)

  if(!club) {
    throw {type: "not_found", message: "This club doesn't exist"}
  }

  return
}

const clubsUtils = {
  validadeClubExist,
  validateClubExistById
}

export default clubsUtils