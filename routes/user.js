
const express = require('express')
const router = express.Router()

// first static
// then dynamic!

const users = [];

router.get('/', (req, res) => {
    console.log('add new user from form');
    res.render("user/new", { firstname: "test" })
})

router.post('/', (req, res) => {
    console.log(req.body.firstname);
    users.push(req.body.firstname);
    res.redirect(`/user/${req.body.firstname}`)
    // alternative res.redirect('users.new', {firstname: req.body.firstname}) //so to form but with new name
})

router.get('/:id', (req, res) => {
    res.send("added user with name " + users[users.length - 1])
})


module.exports = router