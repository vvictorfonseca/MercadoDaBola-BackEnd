import cors from "cors"
import express, { json } from "express"

import router from "./routers";

const app = express();
app.use(cors())
app.use(json())

app.use(router)

export default app