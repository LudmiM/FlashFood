const db = require('../../database/models');

module.exports = async (req, res) => {
    try {

        const { id } = req.params;

        await db.Customer.destroy({
            where:{
                id:id
            } //Hay que agregar para que elimine: *sus direcciones, *sus ordenes, *Favoritos *Su foto de perfil
        });

        res.status(204).json({
            meta: {
                status: 204,
                url: `${req.protocol}://${req.get('host')}/customer/${id}`,
            },
            msg: "Se elimino al usuario",
            ok: true
        });
    } catch (error) {
        console.error('Error al eliminar al cliente:', error);
        res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un error. Sorry!",
        });
    }
};