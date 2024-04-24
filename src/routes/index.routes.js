const express = require("express");
const router = express.Router();
const commerceRoutes = require('./commerce.routes');
const customerRoutes = require('./customer.routes');
const productRoutes = require('./product.routes');
const reviewRoutes = require('./review.routes');
const locationRoutes = require('./location.routes');

router
    .use('/commerce', commerceRoutes) 
    .use('/customer', customerRoutes) 
    .use('/product', productRoutes) 
    .use('/review', reviewRoutes) 
    .use('/location', locationRoutes) 

module.exports = router;