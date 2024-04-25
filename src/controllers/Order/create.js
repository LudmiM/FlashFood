const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
  
        const {idCommerce,finalPrice} = req.body
        const  idCustomer = req.session.userLogin.id

        const order = await db.Order.create({
            idCommerce,finalPrice, idCustomer, idState:1,
            createdAt : new Date(),
            updatedAt : new Date()
        });
        
        //await sendEmail(res, email, 'Welcome to Klinika Merchacovz', templatePatientRegister(fullname))

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