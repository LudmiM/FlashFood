const db = require('../../database/models')
const { validationResult } = require("express-validator");

module.exports = async (req, res) => {
    try {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(401).json({ message: 'Credenciales invalidas'}) 
        }
        
        const user = await db.Customer.findOne({
            where: {
                email: req.body.email
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