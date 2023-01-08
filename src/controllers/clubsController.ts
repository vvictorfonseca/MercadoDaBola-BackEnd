import { Request, Response } from "express";
import clubsService, { CreateClubData } from "../services/clubsService";

async function createClub(req: Request, res: Response) {
  const newClub: CreateClubData = req.body

  await clubsService.createClub(newClub)

  return res.sendStatus(201)
}

export default createClub