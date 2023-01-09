import { Router } from "express";

import { createPlayer, getPlayers } from "../controllers/playersController";

const playerRouter = Router()

playerRouter.post("/create/player", createPlayer)
playerRouter.get("/get/players/:string", getPlayers)

export default playerRouter