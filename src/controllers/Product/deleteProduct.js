const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
        
        const { id } = req.params;
  
        await db.Product.destroy({
            where: {
                id: id
            } //Flta eliminar imagen de carpeta
        });
        
        res.status(201).json({
            meta: {
                status: 201,
                url: `${req.protocol}://${req.get('host')}/product/${id}`,
            },
            message: "Producto eliminado",
            ok: true
        });
    } catch (error) {
        console.error('Error al eliminar el producto: ', error);
        res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un error. Sorry!",
        });
    }
};