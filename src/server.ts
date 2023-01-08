import app from "./app";
import dotenv from "dotenv"

dotenv.config({ path: ".env" })

const PORT:Number | String = process.env.PORT || 5000

app.listen(PORT, ()=> {
  console.log(`Server is listening on port ${PORT}`)
})