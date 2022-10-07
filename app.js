const express = require('express')
const path = require('path')
const app = express()

app.set("view engine", "ejs")
// app.get("/", logger, (req, res) => {
//     res.render("index", { text: "World" })
// })
app.use(express.static("public")) // only static, so html, not ej
app.use(express.urlencoded({ extended: true }))
app.use(logger)


const testRouter = require("./routes/test")
const userRouter = require("./routes/user")

app.use('/test', testRouter)
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}
app.use('/user', userRouter)
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}
app.listen(3000);