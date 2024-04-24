const db = require('../../database/models');

module.exports = async (req, res) => {
    try {

        const { id } = req.params;

        const commerce = await db.Commerce.findOne({
            where: {
                id: id
            },
            include: [{ 
                model: db.Location 
            }],
            attributes: { exclude: ['token', 'idRole', 'password', 'createdAt', 'updatedAt'] }
        });
        const products = await db.Product.findAll({
            where: {
                idCommerce: id
            },
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        })

        res.status(200).json({
            meta: {
                status: 200,
                url: `${req.protocol}://${req.get('host')}/commerce/${id}`,
            },
            data: commerce,
            products:products,
            ok: true
        });
    } catch (error) {
        console.error('Error al obtener los comercios de la categoria:', error);
        res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un error. Sorry!",
        });
    }
};