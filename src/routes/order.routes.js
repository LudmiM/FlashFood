const express = require("express");
const router = express.Router();
const checkRol = require('./../middleware/checkRol');
const { cancel, create } =  require('./../controllers/Review');

router
    .post('/',checkRol.Customer,create)
    .put('/:id',checkRol.Customer,cancel)

module.exports = router