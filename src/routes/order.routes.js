const express = require("express");
const router = express.Router();
const checkRol = require('./../middleware/checkRol');
const { cancel, create, get } =  require('./../controllers/Order');

router
    .get('/',checkRol.Logged,get)
    .post('/',checkRol.Customer,create)
    .put('/:id',checkRol.Customer,cancel)

module.exports = router