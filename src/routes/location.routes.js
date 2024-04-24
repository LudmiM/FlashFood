const express = require("express");
const router = express.Router();
const checkRol = require('./../middleware/checkRol');
const { edit, create, deletee } =  require('./../controllers/Location');

router
    .post('/',checkRol.Logged,create)
    .put('/:id',checkRol.Logged,edit)
    .delete('/:id',checkRol.Logged,deletee)

module.exports = router