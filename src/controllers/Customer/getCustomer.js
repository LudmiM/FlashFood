const db = require('../../database/models');

module.exports = async (req, res) => {
    try {

        const { id } = req.params;

        const customer = await db.Customer.findOne({
            where:{
                id:id
            },
            attributes: { exclude: ['token', 'idRole', 'password', 'createdAt', 'updatedAt'] }
        });

        res.status(201).json({
            meta: {
                status: 201,
                url: `${req.protocol}://${req.get('host')}/customer/${id}`,
            },
            data: customer,
            ok: true
        });
    } catch (error) {
        console.error('Error al obtener los datos del cliente:', error);
        res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un error. Sorry!",
        });
    }
};