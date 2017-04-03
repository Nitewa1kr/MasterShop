var express = require('express');
var bodyParser = require('body-parser');

var path = require('path');

var index = require('./routes/index');

var port = 4001;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//specify view engine
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'app')));

//middleware body parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);

app.listen(port, function(){
  console.log('Server started on...' + port);
});