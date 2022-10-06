const express = require('express')
const app = express()

app.set("view engine", "esj")

const router = require("./routes/test")
app.use('/test', router)
app.listen(3000);