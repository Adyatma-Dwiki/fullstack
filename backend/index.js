import express from "express";
import cros from "cors";
import userRoute from "./routes/userRoutes.js";

const port = 5000
const app = express()
app.use(cros())
app.use(express.json())

app.use(userRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})