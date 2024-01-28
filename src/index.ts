import express, { Request, Response } from "express"
import { PORT } from "./config/constant"
import bodyParser from "body-parser"
import router from "./routes"
import cors from "cors"

const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use(router)

app.use((_req, _res, next) => {
   next(('Not found'))
})

app.listen(PORT, () => {
   console.log(`App running on port ${PORT}`)
}) 