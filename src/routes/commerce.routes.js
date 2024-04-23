const express = require("express");
const router = express.Router();
const loginSesionCommerce = require('./../validations/loginSesionCommerce')
const { editCommerce, loginCommerce, createCommerce, deleteCommerce, getCommerce, getAllCommerce} =  require('./../controllers/Commerce');

router
    .get('/',getAllCommerce)
    .get('/:cat',getCommerce)
    .post('/',loginSesionCommerce,loginCommerce)
    .post('/create',createCommerce)
    .put('/:id',editCommerce)
    .delete('/:id', deleteCommerce);


module.exports = router