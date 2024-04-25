const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
        const commerces = await db.Customer.findAll({
            //include: [{ model: db.Location }],
            attributes: { exclude: ['token', 'idRole', 'password', 'createdAt', 'updatedAt'] }
        });
        
        res.status(201).json({
            meta: {
                status: 201,
                url: `${req.protocol}://${req.get('host')}/customer/`,
            },
            data: commerces,
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