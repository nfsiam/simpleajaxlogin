//DECELARATION
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const PORT = 3000;

var login = require('./controller/login');
var logout = require('./controller/logout');

var admin = require('./controller/admin');



var app = express();

//Configuration
app.set('view engine', 'ejs');

//Middleware
app.use(bodyParser());
app.use(cookieParser());

app.use('/', login);
app.use('/login', login);
app.use('/logout', logout);
app.use('/admin', admin);

//SERVER STARTUP
app.listen(PORT, () => {
    console.log('express server started at 3000');
});