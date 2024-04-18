require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const cors = require('cors')
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');

const indexRoutes = require('./routes/index.routes');

const session = require('express-session');

const app = express();

app.use(express.static('dist'));
app
    .use(morgan('dev'))
    .use(cookieParser())
    .use(methodOverride('_method'))
    .use(cors())

    // Middleware para formularios
    .use(express.json())
    .use(express.urlencoded({ extended: true }))

    //middlewares propios

    //Rutas
    .use('/', indexRoutes)

   /* .get('/', (req, res) => {
    res.render('pages/home/index')
    })]*/

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