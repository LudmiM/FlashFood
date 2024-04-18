require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');

const indexRouter = require('./routes/index.routes');
const usersRouter = require('./routes/users.routes');
const shopsRouter = require('./routes/shops.routes');

const session = require('express-session');

const app = express();

app
    .set('views', path.join(__dirname,'..' ,'views'))
    .set('view engine', 'ejs');

app
    .use(logger('dev'))
    .use(cookieParser())
    .use(methodOverride('_method'))

    // Middleware para formularios
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(express.static(path.join(__dirname, '..', 'public')))

    //middlewares propios

    //Rutas
    .use('/', indexRouter)
    //.use('/users', usersRouter)
    //.use('/shops', shopsRouter)

    //Configuracion de sesion
    .use(session({
        secret: 'FlashFood',
        resave: true, 
        saveUninitialized: true
    }))


// Manejo de errores 404
app.use(function(req, res, next) {
    next(createError(404));
});
  
  // Manejo de errores generales
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app