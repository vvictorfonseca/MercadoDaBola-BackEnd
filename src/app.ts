import cors from "cors"
import express, { json } from "express"
import "express-async-errors"

import router from "./routers";
import handleErrors from "./middlewares/handleErrosMiddleware";

const app = express();
app.use(cors())
app.use(json())

app.use(router)
app.use(handleErrors)

export default app