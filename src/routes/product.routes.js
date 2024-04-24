const express = require("express");
const router = express.Router();
const { editProduct, createProduct, deleteProduct, getProduct, getAllProduct, getAllProductOf} =  require('./../controllers/Product');

router
    .get('/',getAllProduct)
    .get('/:id',getProduct)
    .get('/commerce/:id',getAllProductOf)
    .post('/',createProduct)
    .put('/:id',editProduct)

module.exports = router