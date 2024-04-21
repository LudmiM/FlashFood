const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
        const { id } = req.params;

        await db.Commerce.update(
            {
                name: req.body.name,
                image: req.body.image,//Cuando actulaize la imagen debe eliminar de la carpea la anterior si exixte
                phone: req.body.phone,
            },
            {
                where: { id: id }
            }
        );

        const commerce = await db.Commerce.findByPk(id);

        const respuesta = {
            meta: {
                status: 200,
                data: commerce,
                url: `api/commerce/update/${id}`
            }
        };

        res.status(200).json(respuesta);
    } catch (error) {
        console.error('Error al editar el comercio:', error);
        res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un error. Sorry!",
        });
    }
};
