const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
        
        const {name, idCategory, description, price, available, image} = req.body
        const idCommerce = req.session.userLogin.id;
  
        const product = await db.Product.create({
            name, idCategory, idCommerce, description, price, available, image,
            createdAt : new Date(),
            updatedAt : new Date()
        });
        
        res.status(201).json({
            meta: {
                status: 201,
                url: `${req.protocol}://${req.get('host')}/product/`,
            },
            data: product,
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