
var express =require("express");
var app = express();
var router = express.Router();
var bodyParser = require("body-parser")
var path = require('path');
var cookieParser = require("cookie-parser");
var expressSession = require('express-session');
var moment = require('moment');
var exphbs = require('express-handlebars');
var server = require('http').createServer(app);

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(express.static(path.join(__dirname,'..','public')));
app.use(bodyParser());
app.use(cookieParser());
app.use(expressSession({secret:'515s15s51a5sdasasd51s84das4'}));
var hbs_helpers = {
  ifCond: function (v1, operator, v2, options) {
    console.log(v1);
    console.log(operator);
    console.log(v2);
    switch (operator) {
      case '==':
      return (v1 == v2) ? options.fn(this) : options.inverse(this);
      case '===':
      return (v1 === v2) ? options.fn(this) : options.inverse(this);
      case '<':
      return (v1 < v2) ? options.fn(this) : options.inverse(this);
      case '<=':
      return (v1 <= v2) ? options.fn(this) : options.inverse(this);
      case '>':
      return (v1 > v2) ? options.fn(this) : options.inverse(this);
      case '>=':
      return (v1 >= v2) ? options.fn(this) : options.inverse(this);
      case '&&':
      return (v1 && v2) ? options.fn(this) : options.inverse(this);
      case '||':
      return (v1 || v2) ? options.fn(this) : options.inverse(this);
      default:
      return options.inverse(this);
    }
  }
}
app.engine('.hbs', exphbs({
  layoutsDir: path.join(__dirname, "..","cliente","views","layouts" ),
  defaultLayout: 'main',
  extname: 'hbs',
  helpers: hbs_helpers
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '..','cliente','views'));
var navRouter = require('./routes/nav');
app.use('/', navRouter);
var main = require('./models/main');





main.start()
.then(function(){
  app.start = app.listen(5000, function (){
    console.log("Escuchando en el puerto 5000");
   });
  });




  var rutaRouter = require('./routes/ruta.js');
  app.use('/ruta', rutaRouter);
