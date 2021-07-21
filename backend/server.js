import express from 'express'
import cors from 'cors'
import restaurants from './api/restaurants.route.js'

const app = express()

app.use(cors())
app.use(express.json()) // Server can accept json in the body of a request (GET, POST, etc). BODYPARCER now in express

app.use("/api/v1/restaurants", restaurants)
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))

export default app

