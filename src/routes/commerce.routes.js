const express = require("express");
const router = express.Router();
const loginSesionCommerce = require('./../validations/loginSesionCommerce')
const { editCommerce, loginCommerce, createCommerce, deleteCommerce, getCommerce, filterCommerce, getAllCommerce} =  require('./../controllers/Commerce');

router
    .get('/',getAllCommerce)
    .get('/:id',getCommerce)
    .get('/category/:cat',filterCommerce)
    .post('/',loginSesionCommerce,loginCommerce)
    .post('/create',createCommerce)
    .put('/:id',checkRol.Commerce,editCommerce)
    .delete('/:id', deleteCommerce);

module.exports = router