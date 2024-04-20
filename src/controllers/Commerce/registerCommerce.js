const db = require('../../database/models');

module.exports = async (req, res) => {
    try {

        const commerce = await db.Commerce.create(
            {
                name: req.body.name,
                image: req.body.image,
                phone: req.body.phone,
            }
        );

        const respuesta = {
            meta: {
                status: 201,
                data: commerce,
                url: `api/commerce/register/${commerce.id}`
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