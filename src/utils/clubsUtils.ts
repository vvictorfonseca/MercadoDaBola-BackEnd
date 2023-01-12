import clubsRepository from "../repositories/clubsRepository";

async function validadeClubExist(clubName: string) {
  const club = await clubsRepository.getClubByName(clubName)

  if (club) {
    throw {type: "conflict", message: "This club is already registered!"}
  }
}

const clubsUtils = {
  validadeClubExist
}

export default clubsUtils