const express = require("express");
const router = express.Router();
const commerceRoutes = require('./commerce.routes');

router.use('/commerce', commerceRoutes); 


module.exports = router;