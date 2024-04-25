const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
  
        const order = await db.Order.update(
            {idState:3},
            {where:{ id:id }}
        );
    
        res.status(201).json({
            meta: {
                status: 201,
                url: `${req.protocol}://${req.get('host')}/order/`,
            },
            data: order,
            ok: true
        });
    } catch (error) {
        console.error('Error al crear la orden :', error);
        res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un error. Sorry!",
        });
    }   
}