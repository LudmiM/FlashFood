const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
  
        const {idCommerce, comment, score} = req.body
        const  idCustomer = req.session.userLogin.id

        if (!comment || !idCommerce|| !score) {
            throw new Error('Los campos son necesarios.')
        }
    
        const comments = await db.Review.create({
            idCommerce, comment, score, idCustomer
        });
    
        res.status(201).json({
            meta: {
                status: 201,
                url: `${req.protocol}://${req.get('host')}/review/`,
            },
            data: comments,
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