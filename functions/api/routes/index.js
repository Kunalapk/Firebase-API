const express = require('express');
const router = express.Router();

//Used when run under localhost
router.use('/', require('./v1.0'));
router.use('/v1.0', require('./v1.0'));

module.exports = router;
