import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import 'express-group-routes';
import uri from './config/db.js';
import routes from './routes'; // If you do not explicitly name the file you want to require, node looks for index.js

const app = express();
const PORT = process.env.PORT || 3000;
const URI = process.env.MONGOD_URI || uri;
//mongodb://<dbuser>:<dbpassword>@ds117913.mlab.com:17913/heroku_4fb37fwz

// Parse application/json
app.use(bodyParser.json());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//database connection
mongoose.Promise = global.Promise;
mongoose.connection.openUri(URI)
    .then((message) =>{
        console.log("Connected to database successfully");
    }).catch((err) =>{
        console.log("An error ocurred: ",err);
        process.exit(1);
});

//middleware routes
app.use('/', routes);
// running app in a port
app.listen(PORT,(err) =>{
    if(!err)
        console.log("App running on port "+PORT);
    else
        console.log("Error ");
})

