const db = require('../../database/models');

module.exports = async (req, res) => {
    try {

        const commerce = await db.Commerce.create(
            {
                name: req.body.name,
                image: req.body.image,//guardar la imagene ne el archivo correspondiente con m
                phone: req.body.phone,
            }
        );
        res.status(201).json({
            meta: {
                status: 201,
                url: `${req.protocol}://${req.get('host')}/commerce/create/`,
            },
            data: commerce,
            ok: true
        });
    } catch (error) {
        console.error('Error al registrar el comercio:', error);
        res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un error. Sorry!",
        });
    }
};