const express = require("express");
const router = express.Router();
const loginSesionCustomer = require('./../validations/loginSesionCommerce')
const { editCommerce, loginCustomer, createCommerce, deleteCommerce, getCommerce} =  require('./../controllers/Commerce');

router
    .get('/',loginSesionCustomer,loginCustomer)/*
    .get('/:cat',getCommerce)
    .post('/create',createCommerce)
    .put('/update/:id',editCommerce)
    .delete('/delete/:id', deleteCommerce);*/


module.exports = router