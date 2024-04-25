const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
        var orders
        if (req.session.userLogin.idRole === 2){
            const  idCustomer = req.session.userLogin.id
            orders = await db.Order.findAll(
                {where:{id:idCustomer}},
                {attributes: { exclude: ['createdAt', 'updatedAt'] }}
            );
        }else{
            const  idCommerce = req.session.userLogin.id
            orders = await db.Order.findAll(
                {where:{id:idCommerce}},
                {attributes: { exclude: ['createdAt', 'updatedAt'] }}
            );
        }
        
        res.status(201).json({
            meta: {
                status: 201,
                url: `${req.protocol}://${req.get('host')}/order/`,
            },
            data: orders,
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