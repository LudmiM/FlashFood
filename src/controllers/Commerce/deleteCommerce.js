//obtener el id del comercio a eliminar,
//Buscar todos los productos e ir eliminando
//Eliminr la ubicaion/locacion del comercio
//Eliminar el comercio
const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
        const { id } = req.params;

        await db.Product.destroy(
            {
                where: {
                    idCommerce: id
                }
            }
        );

        const commerce = await db.Commerce.destroy(
            {
                where: {
                    id: id
                },
                include: [{ model: db.Location, as: 'location' }]
            }
        );

        const respuesta = {
            meta: {
                status: 200,
                data: commerce,
                url: `api/commerce/delete/${id}`
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