import { Router } from "express";

import playerRouter from "./playerRouter";
import clubRouter from "./clubRouter";
import transferRouter from "./transferRouter";
import likesRouter from "./likesRouter";

const router = Router()

router.use(playerRouter)
router.use(clubRouter)
router.use(transferRouter)
router.use(likesRouter)

export default router