import { Router } from "express";

import { createOrUpdateTransfer, getTransfersByStatus } from "../controllers/transfersController";

const transferRouter = Router()

transferRouter.post("/upsert/transfer", createOrUpdateTransfer)
transferRouter.get("/get/transfers", getTransfersByStatus)

export default transferRouter