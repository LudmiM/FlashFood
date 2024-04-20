const db = require('../../database/models');

module.exports = async (req, res) => {
    try {

        const commerces = await db.Commerce.findAll({});

        const respuesta = {
            meta: {
                status: 201,
                data: commerces,
                url: `api/commerce/all`
            }
        };

        res.status(201).json(respuesta);
    } catch (error) {
        console.error('Error al editar el comercio:', error);
        res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un error. Sorry!",
        });
    }
};