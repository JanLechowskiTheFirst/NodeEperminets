const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const mongoClient = require("mongodb").MongoClient
// const { mongoFunction } = require("./mongoRepo/mongoTests") // how to later add that to routes?
app.set("view engine", "ejs") // only static/a bit dinamic views


// config at startup
var env = process.env.NODE_ENV || 'development'
var envConfig = require('./config/database').dbConfig[env] // this is greate + you can add env at startup - read how to do it with nodemon (or no nodemon at prod)


const uri = `mongodb://${envConfig.database.username}:${envConfig.database.password}@${envConfig.database.db}}/${envConfig.database.default}`
mongoClient.connect(uri, { useNewUrlParser: true }, (err, database) => {
    if (err) return console.log(err);
    require(envConfig.database.defult)(app, database);
});
const serverConfig = require('./serverConfig')[env];

// how to use logger
// app.get("/", logger, (req, res) => {
//     res.render("index", { text: "World" })
// })

app.use(express.static("public")) // only static, so html, not ej
app.use(express.urlencoded({ extended: true }))
app.use(logger)

// mongoClient.connect(mongoFunction(uri, mongoClient.db));
const testRouter = require("./routes/test")
const userRouter = require("./routes/user")


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
module.exports = mongoClient
