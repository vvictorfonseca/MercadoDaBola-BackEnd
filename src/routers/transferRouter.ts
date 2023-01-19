import { Router } from "express";

import { createOrUpdateTransfer, getTransfersByStatus } from "../controllers/transfersController";
import { validateSchema } from "../middlewares/validateSchema";
import transferSchema from "../schemas/transfersSchema";

const transferRouter = Router()

transferRouter.post("/upsert/transfer", validateSchema(transferSchema), createOrUpdateTransfer)
transferRouter.get("/get/transfers/:status", getTransfersByStatus)

export default transferRouter