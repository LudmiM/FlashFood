const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
                
        const { id } = req.params;

        const products = await db.Product.findAll({
            where:{
                idCommerce:id
            },
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        });
        
        res.status(200).json({
            meta: {
                status: 200,
                url: `${req.protocol}://${req.get('host')}/product/commerce/${id}`,
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