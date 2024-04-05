const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index.routes');

const app = express();

// Configuración del motor de vistas y ruta de archivos estáticos
app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'html'); 

app
  .use(logger('dev'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(cookieParser())
  .use(express.static(path.join(__dirname, '..', '..', 'frontend')))
  .use(express.static(path.join(__dirname, '..', '..', 'frontend','public')))


  // Rutas
  .use('/', indexRouter);

// Manejo de errores 404
app.use(function(req, res, next) {
  next(createError(404));
});

// Manejo de errores
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
