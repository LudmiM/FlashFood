const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
        const products = await db.Product.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        });
        
        res.status(201).json({
            meta: {
                status: 201,
                url: `${req.protocol}://${req.get('host')}/product/`,
            },
            data: products,
            ok: true
        });
    } catch (error) {
        console.error('Error al obtener los clientes:', error);
        res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un error. Sorry!",
        });
    }
};