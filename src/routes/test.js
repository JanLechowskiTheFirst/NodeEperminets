
const express = require('express')
const router = express.Router()
// const utils = require('../utils/test');

// first static
// then dynamic!

//router needs logger -> not console log!!

const mongo = require('../mongoRepo/mongoUsers')


router.get("/", (req, res) => {
    console.log("get from mongo")
    res.send(mongo.run()) // does mongo work well? 
})

router.post('/', (req, res) => {
    res.send('Create');
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.send("user get " + id);
})

//v2
// wiele dla jednego adresu
router.route("/:id").get((req, res) => {
    const id = req.params.id
    res.json({ test: "done" })
}).put((req, res) => {
    const id = req.params.id
    res.json({ test: "done" })
}).delete((req, res) => {
    const id = req.params.id
    res.json({ test: "done" })
})

//router.param => runs when we have param
router.param("id", (req, res, next, id) => {
    //param is middleware, needs next() to be called to retun request
    next() // next pease of middleware
})

module.exports = router