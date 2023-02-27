import { Router } from "express";

import playerRouter from "./playerRouter";
import clubRouter from "./clubRouter";
import transferRouter from "./transferRouter";
import likesRouter from "./likesRouter";
import adminRouter from "./adminRouter";

const router = Router()

router.use(playerRouter)
router.use(clubRouter)
router.use(transferRouter)
router.use(likesRouter)
router.use(adminRouter)

export default router