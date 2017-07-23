import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import 'express-group-routes';
import uri from './config/db.js'

const app = express();
const PORT = process.env.PORT || 3000;
const URI = process.env.MONGOD_URI || uri;

// Parse application/json
app.use(bodyParser.json());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//datatabse connection
mongoose.connection.openUri(URI)
    .then((message) =>{
        console.log("Connected to database successfully");
    }).catch((err) =>{
        console.log("An error ocurred: ",err);
        process.exit(1);
});

// running app in a port
app.listen(PORT,(err) =>{
    if(!err)
        console.log("App running on port "+PORT);
    else
        console.log("Error ");
})

