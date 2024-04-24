require('dotenv').config();
const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const checkLocalSession = require('./middleware/checkLocalSession');
const checkCookie = require('./middleware/checkCookie');
const session = require('express-session');

const indexRoutes = require('./routes/index.routes');

const app = express();

app
    .use(express.static('dist'))
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

    .get('/', (req, res) => {
        res.render('pages/home/index')
    })

module.exports = app