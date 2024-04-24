const db = require('../../database/models');

module.exports = async (req, res) => {
    try {

        const { id } = req.params;
        const { comment, score } = req.body

        if (!comment || !score) {
            throw new Error('Los campos son necesarios.')
        }
    
        await db.Review.update(
            {
             comment, score 
            },{
                where: { id: id }
            }
        );
        const review = await db.Review.findByPk(id);
        res.status(201).json({
            meta: {
                status: 201,
                url: `${req.protocol}://${req.get('host')}/review/`,
            },
            data: review,
            ok: true
        });
    } catch (error) {
        console.error('Error al crear el comentario :', error);
        res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un error. Sorry!",
        });
    }   
}