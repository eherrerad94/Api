# API With Node, Express and MongoDB

## Install
```
$ git clone https://github.com/eherrerad94/api.git
$ cd API
$ npm install
$ npm start
```
## Deploy to Heroku
```
$ heroku create NAME_OF_YOUR_APP
$ heroku git:remote -a NAME_OF_YOUR_APP.git
$ heroku addons:create mongolab
$ heroku addons:open mongolab 
$ heroku config:set MONGOD_URI = mongodb://<dbuser>:<dbpassword>@ds117913.mlab.com:17913/heroku_4fb37fwz
```