import { Router } from "express";

import createOrUpdateTransfer from "../controllers/transfersController";

const transferRouter = Router()

transferRouter.post("/upsert/transfer", createOrUpdateTransfer)

export default transferRouter