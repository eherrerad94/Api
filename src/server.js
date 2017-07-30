import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
//import methodOverride from 'method-override';
import 'express-group-routes';
import routes from './routes'; // If you do not explicitly name the file you want to require, node looks for index.js
import config from './config/db';
const app = express();
const dbLocal = config.db.mongo + config.db.host + '/' + config.db.name;
const dbProd = config.db.mondoprod;

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGOD_URI || dbLocal;

// Parse application/json
app.use(bodyParser.json());
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.disable('x-powered-by') // dont show  X-Powered-By: Express


//database connection
mongoose.Promise = global.Promise;
mongoose.connection.openUri(dbLocal)
    .then(() => {
        console.log("Connected to database successfully");
    }).catch((err) => {
        console.log("An error ocurred: ", err);
        process.exit(1);
    });

//middleware routes
app.use('/', routes);
// running app in a port
app.listen(PORT, (err) => {
    if (!err)
        console.log("App running on port " + PORT);
    else
        console.log("Error running an app ", err);
})

