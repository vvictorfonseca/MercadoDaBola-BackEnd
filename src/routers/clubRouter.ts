import { Router } from "express";
import { createClub, getClubs } from "../controllers/clubsController";

const clubRouter = Router()

clubRouter.post("/create/club", createClub)
clubRouter.get("/get/clubs/:string", getClubs)

export default clubRouter