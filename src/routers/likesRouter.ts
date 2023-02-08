import { Router } from "express";

import { postLike, getLikesByTransferId } from "../controllers/likesController";

const likesRouter = Router()

likesRouter.post("/postLike", postLike)
likesRouter.get("/getLikes/:transferId", getLikesByTransferId)

export default likesRouter