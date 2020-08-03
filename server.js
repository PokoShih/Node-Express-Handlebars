var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path')
var app = express();
var mysql = require('mysql');
var PORT = process.env.PORT || 8080;

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('hbs', exphbs({
    defaultLayout: 'main'
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var routes = require('./controllers/burgers_controllers.js');
app.use('/', routes);


app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});