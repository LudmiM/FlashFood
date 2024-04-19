module.exports = (req,res,next) => {
    if (req.cookies.FlashFood_user_Login_01){
        req.session.userLogin = req.cookies.FlashFood_user_Login_01
    }
    next();
}