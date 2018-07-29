'use strict';

const express = require('express');
const router = express.Router();
const Middleware = require('./middlewares');


router.all('*', Middleware.authenticate,(req, res, next) => {
    next();
});

module.exports = router;
