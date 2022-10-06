const express = require('express')
router = express.Router();


router.send("/test", (req, res) => {
    res.send();
})

module.exports = router