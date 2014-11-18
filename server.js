var express     = require('express');
var bodyParser  = require('body-parser');
var app         = express();
var port        = process.env.PORT || 8000;
var path        = __dirname; 

//config
app.use(express.static(path));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(function (req, res, next) {

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

require('./app/routes/routes')(app);

//start the server
app.listen(port);
console.log('Magic happens on port ' + port);

module.exports = app;