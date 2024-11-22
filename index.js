import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send("Home page this server on Node.js")
})

app.listen(7777, () => console.log("Server normal work!"))