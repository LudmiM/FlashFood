const { body } = require("express-validator");

module.exports = [
    body('name')
        .notEmpty().withMessage('El nombre no puede estar vacio'),
    body('price')
        .notEmpty().withMessage('El precio no puede estar vacio'),
    body('currency_type')
        .notEmpty().withMessage('El tipo de cambio no puede estar vacio'),
    body('time')
        .notEmpty().withMessage('El tiempo de preparacion no puede estar vacio'),
    body('description')
        .notEmpty().withMessage('El debe agregar una descripcion'),
    body('idCategory')
        .notEmpty().withMessage('L categoria no debe estar vacia'),
    body('available')
        .notEmpty().withMessage('La cantidad no puede estar vacia')
];
