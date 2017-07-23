'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

require('express-group-routes');

var _db = require('./config/db.js');

var _db2 = _interopRequireDefault(_db);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// If you do not explicitly name the file you want to require, node looks for index.js

var app = (0, _express2.default)();
//import methodOverride from 'method-override';

var PORT = process.env.PORT || 3000;
var URI = process.env.MONGOD_URI || _db2.default;
var databaseMongo = 'mongodb://eduardo:rafaga@ds117913.mlab.com:17913/heroku_4fb37fwz';

// Parse application/json
app.use(_bodyParser2.default.json());
console.log(URI);

// Parse application/x-www-form-urlencoded
app.use(_bodyParser2.default.urlencoded({ extended: true }));

//database connection
_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connection.openUri(databaseMongo).then(function () {
    console.log("Connected to database successfully");
}).catch(function (err) {
    console.log("An error ocurred: ", err);
    process.exit(1);
});

//middleware routes
app.use('/', _routes2.default);
// running app in a port
app.listen(PORT, function (err) {
    if (!err) console.log("App running on port " + PORT);else console.log("Error running an app ", err);
});