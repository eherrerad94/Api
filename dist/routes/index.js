'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _tvShow = require('./tvShow.js');

var _tvShow2 = _interopRequireDefault(_tvShow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PATH_API = '/api/v1';
//Import all the specified routes

var router = _express2.default.Router();
// In this file we're going to add all the routes for our API
// We need to import the files  as import NAME from './NAMEFILEROUTES'
// and we're gonna use as: router.use('/path', NAME);

router.use(PATH_API, _tvShow2.default);

router.get(PATH_API, function (req, res) {
    res.send('Welcome to the amazing API ');
});
// Same for all other files/
//https://ciphertrick.com/2017/01/11/token-based-authentication-node-js-using-jwt/
module.exports = router;