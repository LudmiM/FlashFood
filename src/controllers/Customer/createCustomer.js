const db = require('../../database/models');

module.exports = async (req, res) => {
    try {

        const { name, lastName, email, phone, password, token, idRole, image, } = req.body;

        const customer = await db.Customer.create({
            name, lastName, email, phone, password, token, idRole, image
        });//Falta llamar para guardar el archivo de la imagen del user

        res.status(201).json({
            meta: {
                status: 201,
                url: `${req.protocol}://${req.get('host')}/customer/`,
            },
            data: customer,
            ok: true
        });
    } catch (error) {
        console.error('Error al crear el cliente:', error);
        res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un error. Sorry!",
        });
    }
};