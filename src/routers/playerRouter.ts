import { Router } from "express";

import { createPlayer, getPlayers } from "../controllers/playersController";
import { validateSchema } from "../middlewares/validateSchema";
import playerSchema from "../schemas/playersSchema";

const playerRouter = Router()

playerRouter.post("/create/player", validateSchema(playerSchema), createPlayer)
playerRouter.get("/get/players/:string", getPlayers)

export default playerRouter