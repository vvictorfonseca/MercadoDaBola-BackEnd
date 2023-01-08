import cors from "cors"
import express, { application, json } from "express"

const app = express();
app.use(cors())
app.use(json())

export default app