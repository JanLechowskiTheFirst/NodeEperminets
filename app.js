const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const mongoClient = require("mongodb").MongoClient
const mongoTest = require("./src/mongoRepo/mongoTests") // how to later add that to routes?
app.set("view engine", "ejs") // only static/a bit dinamic views


// config at startup
var env = process.env.NODE_ENV || 'development'
var envConfig = require('./src/config/database')[env] // this is greate + you can add env at startup - read how to do it with nodemon (or no nodemon at prod)


const uri = `mongodb+srv://${envConfig.database.username}:${envConfig.database.password}@${envConfig.database.db}}/${envConfig.database.dafault}`
mongoClient.connect(uri, { useNewUrlParser: true }, (err, database) => {
    if (err) return console.log(err);
    require(envConfig.database.defult)(app, database);
});

// how to use logger
// app.get("/", logger, (req, res) => {
//     res.render("index", { text: "World" })
// })

app.use(express.static("public")) // only static, so html, not ej
app.use(express.urlencoded({ extended: true }))
app.use(logger)

// can this work?
module.exports = mongoClient
mongoTest();
const testRouter = require("./src/routes/test")
const userRouter = require("./src/routes/user")


// to use routers + add common roth route to them, works greate, needs module.exports
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
app.listen(serverConfig.server.port);

