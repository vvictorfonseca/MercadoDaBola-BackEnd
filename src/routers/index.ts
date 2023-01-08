import { Router } from "express";

import playerRouter from "./playerRouter";
import clubRouter from "./clubRouter";
import transferRouter from "./transferRouter";

const router = Router()

router.use(playerRouter)
router.use(clubRouter)
router.use(transferRouter)

export default router