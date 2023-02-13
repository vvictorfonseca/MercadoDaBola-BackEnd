import { Router } from "express";

import { createOrUpdateTransfer, getTransfersByStatus, getTransferByPlayerId } from "../controllers/transfersController";
import { validateSchema } from "../middlewares/validateSchema";
import transferSchema from "../schemas/transfersSchema";

const transferRouter = Router()

transferRouter.post("/upsert/transfer", validateSchema(transferSchema), createOrUpdateTransfer)
transferRouter.get("/get/transfers/:status", getTransfersByStatus)
transferRouter.get("/get/transfer/by/:playerId", getTransferByPlayerId)

export default transferRouter