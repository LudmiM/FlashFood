const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
        const { id } = req.params;

        await db.Customer.update(
            {
                name: req.body.name,
                lastName: req.body.lastName,
                image: req.body.image,//Cuando actulaize la imagen debe eliminar de la carpea la anterior si exixte
                phone: req.body.phone,
            },
            {
                where: { id: id }
            }
        );

        const customer = await db.Customer.findByPk(id);
        res.status(201).json({
            meta: {
                status: 201,
                url: `${req.protocol}://${req.get('host')}/api/customer/update/${id}`,
            },
            data: customer,
            ok: true
        });
    } catch (error) {
        console.error('Error al editar el comercio:', error);
        res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un error. Sorry!",
        });
    }
};
