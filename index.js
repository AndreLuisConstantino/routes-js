// const express = require('express')
import express from "express"
import routes from "./routes/routes.js"

const app = express()

const PORT = 8080

app.use(routes)

app.use(express.json())

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))