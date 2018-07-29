'use strict';

const express = require('express');
const router = express.Router();

//Middleware
const Middleware = require('./middlewares');

//All controllers load here
const Company = require('./controllers/companies');


router.use(require('./internal.js'));


router.put('/company',Company.addCompany);
router.get('/company',Company.getCompany);
router.put('/company/:companyID/product',Company.addProduct);
router.get('/company/:companyID/product',Company.getProduct);

module.exports = router;
