import express from 'express';
//Import all the specified routes
import tvShow from './tvShow.js';

const PATH_API = '/api/v1';
const router = express.Router();
// In this file we're going to add all the routes for our API
// We need to import the files  as import NAME from './NAMEFILEROUTES'
// and we're gonna use as: router.use('/path', NAME);

router.use(PATH_API,tvShow);

router.get(PATH_API, (req,res) => {
    res.send('Welcome to the amazing API ')
})
// Same for all other files/
//https://ciphertrick.com/2017/01/11/token-based-authentication-node-js-using-jwt/
module.exports = router;