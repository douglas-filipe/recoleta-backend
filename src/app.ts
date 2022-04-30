import express from 'express'
import userRoute from './routes/user.routes'
import cors from 'cors'
const app = express()

app.use(express.json())

app.use(userRoute)

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        credentials: true,
    })
)

app.get("/", (__, res) => {
    res.send("Hello World");
})

export { app }