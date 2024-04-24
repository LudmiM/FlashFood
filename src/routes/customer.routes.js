const express = require("express");
const router = express.Router();
const loginSesionCustomer = require('./../validations/loginSesionCustomer')
const { editCustomer, loginCustomer, createCustomer, deleteCustomer, getCustomer, getAllCustomer} =  require('./../controllers/Customer');

router
    .get('/',getAllCustomer)
    .get('/:id',getCustomer)
    .post('/',loginSesionCustomer,loginCustomer)/*
    .post('/create',createCustomer)
    .put('/:id',checkRol.Customer,editCustomer)
    .delete('/:id', deleteCustomer);*/

module.exports = router