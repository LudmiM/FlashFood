const db = require('./../../database/models')

module.exports = async (req, res) => {
    try {

        const emailOfBody = req.body.email;

        const user = await db.User.findOne({
            where: {
                email: emailOfBody
            }
        });

        const { idRole, id, email } = user.dataValues
        
        req.session.userLogin = {
            idRole, id, email
        }

        res.cookie('FlahFood_user_Login_01', req.session.userLogin, {
            maxAge: 1000 * 60 * 5
        });      

        return idRole != 3 ? res.redirect('/') : res.redirect('/administrador')
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error interno del servidor');
    }
};