import { Request, Response } from "express";
import clubsService, { CreateClubData } from "../services/clubsService";

async function createClub(req: Request, res: Response) {
  const newClub: CreateClubData = req.body

  await clubsService.createClub(newClub)

  return res.sendStatus(201)
}

async function getClubById(req: Request, res: Response) {
  const clubId: number = parseInt(req.params.clubId)

  const club = await clubsService.getClubById(clubId)

  return res.status(200).send(club)
}

async function getClubs(req: Request, res: Response) {
  const string: string = req.params.string

  const clubs = await clubsService.getClubs(string)

  return res.status(200).send(clubs)
}

export  { createClub, getClubs, getClubById }