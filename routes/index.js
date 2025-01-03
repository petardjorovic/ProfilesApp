const express = require('express');

const router = express.Router();

router.use('/', require('./Home-route'));
router.use('/edit', require('./Edit-route'));


module.exports = router;