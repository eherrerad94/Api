

//const db = "mongodb://localhost/databaseMongo";


var config = { 
    db: {
        mongo: 'mongodb://',
        host: 'localhost',
        name: 'databaseMongo',
        mondoprod: 'mongodb://eduardo:rafaga@ds117913.mlab.com:17913/heroku_4fb37fwz'
    },
    webhost: 'http://localhost:3000'
}

module.exports = config;