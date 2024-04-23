const express = require("express");
const router = express.Router();
const commerceRoutes = require('./commerce.routes');
const customerRoutes = require('./customer.routes');

router
    .use('/commerce', commerceRoutes) 
    .use('/customer', customerRoutes) 


module.exports = router;