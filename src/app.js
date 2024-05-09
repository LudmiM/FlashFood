require('dotenv').config();
const express = require('express');
const cors = require('cors')
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const checkLocalSession = require('./middleware/checkLocalSession');
const checkCookie = require('./middleware/checkCookie');
const session = require('express-session');

const indexRoutes = require('./routes/index.routes');

const app = express();

app
  .set('views', path.join(__dirname,'..', 'Material'))
  .set('view engine', 'ejs');


app
    .use(morgan('dev'))
    .use(express.static(path.join(__dirname,'..', 'Public')))//Carpeta donde estan las imagenes
    .use(morgan('dev'))
    .use(cookieParser())
    .use(methodOverride('_method'))
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))

    //Configuracion de sesion
    .use(session({
        secret: 'FlashFood',
        resave: true, 
        saveUninitialized: true
    }))

    //middlewares propios
    .use(checkCookie)
    .use(checkLocalSession)
    
    //Rutas
    .use('/', indexRoutes)

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