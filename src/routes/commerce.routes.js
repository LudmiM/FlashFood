const express = require("express");
const router = express.Router();
const loginSesionCommerce = require('./../validations/loginSesionCommerce')
const { editCommerce, loginCommerce, createCommerce, deleteCommerce, getCommerce} =  require('./../controllers/Commerce');

router
    .get('/',loginSesionCommerce,loginCommerce)
    .get('/:cat',getCommerce)
    .post('/create',createCommerce)
    .put('/update/:id',editCommerce)
    .delete('/delete/:id', deleteCommerce);


module.exports = router