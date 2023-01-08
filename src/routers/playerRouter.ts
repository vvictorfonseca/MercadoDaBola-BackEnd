import { Router } from "express";

import createPlayer from "../controllers/playersController";

const playerRouter = Router()

playerRouter.post("/create/player", createPlayer)

export default playerRouter