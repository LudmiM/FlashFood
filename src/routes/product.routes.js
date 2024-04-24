const express = require("express");
const router = express.Router();
const checkRol = require('./../middleware/checkRol');
const { editProduct, createProduct, deleteProduct, getProduct, getAllProduct, getAllProductOf} =  require('./../controllers/Product');

router
    .get('/',getAllProduct)
    .get('/:id',getProduct)
    .get('/commerce/:id',getAllProductOf)
    .post('/',checkRol.Commerce,createProduct)
    .put('/:id',checkRol.Commerce,editProduct)
    .delete('/:id',checkRol.Commerce,deleteProduct)

module.exports = router