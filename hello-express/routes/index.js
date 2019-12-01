const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.json({ message: 'Hello from SEI!' })
})

module.exports = router;
// Export the router so we can use it
// in the server.js file