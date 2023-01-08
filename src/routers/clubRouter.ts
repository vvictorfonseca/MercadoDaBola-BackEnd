import { Router } from "express";
import createClub from "../controllers/clubsController";

const clubRouter = Router()

clubRouter.post("/create/club", createClub)

export default clubRouter