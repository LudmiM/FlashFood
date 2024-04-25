const db = require('../../database/models');

module.exports = async (req, res) => {
    try {

        const { id } = req.params;
        const {country, province, city, comment, address} = req.body

        if (!country || !province || !city || !address) {
            throw new Error('Los campos son necesarios.')
        }
        
        await db.Location.update(
            { country, province, city, comment, address },
            { where: { id: id } }
        );
    
        res.status(200).json({
            meta: {
                status: 200,
                url: `${req.protocol}://${req.get('host')}/location/`,
            },
            msg: 'Se creo la ubicacion',
            ok: true
        });
    } catch (error) {
        console.error('Error al actualizar la ubicacion :', error);
        res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un error. Sorry!",
        });
    }   
}