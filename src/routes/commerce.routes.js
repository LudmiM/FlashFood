const express = require("express");
const router = express.Router();
const loginSesion = require('./../validations/loginSesion')
const { editCommerce, loginCommerce, createCommerce, deleteCommerce, getCommerce} =  require('./../controllers/Commerce');

router
    .get('/',loginSesion,loginCommerce)
    .get('/:cat',getCommerce)
    .post('/create',createCommerce)
    .put('/update/:id',editCommerce)
    .delete('/delete/:id', deleteCommerce);


module.exports = router