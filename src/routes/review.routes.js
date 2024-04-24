const express = require("express");
const router = express.Router();
const checkRol = require('./../middleware/checkRol');
const { edit, create, deletee } =  require('./../controllers/Review');

router
    .post('/',checkRol.Customer,create)
    .put('/:id',checkRol.Customer,edit)
    .delete('/:id',checkRol.Customer,deletee)

module.exports = router