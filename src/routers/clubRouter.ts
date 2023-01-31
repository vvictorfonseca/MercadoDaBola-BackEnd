import { Router } from "express";
import { createClub, getClubs, getClubById } from "../controllers/clubsController";
import { validateSchema } from "../middlewares/validateSchema";
import clubSchema from "../schemas/clubsSchema";

const clubRouter = Router()

clubRouter.post("/create/club", validateSchema(clubSchema), createClub)
clubRouter.get("/get/clubs/:string", getClubs)
clubRouter.get("/get/club/:clubId", getClubById)

export default clubRouter