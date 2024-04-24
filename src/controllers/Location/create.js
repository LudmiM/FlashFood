const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
  
        const {country, province, city, comment, address} = req.body
        const  idCustomer = req.session.userLogin.id

        if (!country || !province || !city || !address) {
            throw new Error('Los campos son necesarios.')
        }
    
        const location = await db.Location.create({
            country, province, city, comment, address, idCustomer
        });
    
        res.status(201).json({
            meta: {
                status: 201,
                url: `${req.protocol}://${req.get('host')}/location/`,
            },
            data: location,
            ok: true
        });
    } catch (error) {
        console.error('Error al crear la ubicacion :', error);
        res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un error. Sorry!",
        });
    }   
}