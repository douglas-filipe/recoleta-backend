import express from 'express'
import userRoute from './routes/user.routes'
import donationRoute from './routes/donation.routes'
import cors from 'cors'
const app = express()

app.use(express.json())

app.use(userRoute)
app.use(donationRoute)

app.use(
    cors({
        origin: ["*", "http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        credentials: true,
    })
)

app.get("/", (__, res) => {
    res.send("Hello World");
})

export { app }