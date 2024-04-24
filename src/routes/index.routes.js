const express = require("express");
const router = express.Router();
const commerceRoutes = require('./commerce.routes');
const customerRoutes = require('./customer.routes');
const productRoutes = require('./product.routes');

router
    .use('/commerce', commerceRoutes) 
    .use('/customer', customerRoutes) 
    .use('/product', productRoutes) 

module.exports = router;