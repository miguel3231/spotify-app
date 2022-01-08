const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("I guess I'll do something here");
})

module.exports = router;