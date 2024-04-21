const db = require('../../database/models')

module.exports = async (req, res) => {
    try {

        const emailOfBody = req.body.email;

        const user = await db.Customer.findOne({
            where: {
                email: emailOfBody
            }
        });

        const { idRole, id, email } = user.dataValues
        
        req.session.userLogin = {
            idRole, id, email
        }

        res.cookie('FlahFood_user_Login_01', req.session.userLogin, {
            maxAge: 1000 * 60 * 10
        });      

        return res.status(200).json({ message: 'Cliente logueado'}) 
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: 'Error al inicar sesion', message: error.message })
    }
};