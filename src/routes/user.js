import userCtrl from '../controllers/user';
import express from 'express';
const app = express.Router();

app.group('/auth', (router) => {
    router
        .post('/register', (req, res) => {
            //const user = req.body;
            console.log(req.body);
            userCtrl
                .register(req.body)
                .then(user => {
                    user.hash_password = undefined;
                    console.log("tvShows:", user)
                    res
                        .status(200)
                        .json({
                            user: user,
                            length: user.length,
                            message: 'User created successfully' 
                        })
                })
                .catch(err => {
                    console.log("Err:", err)
                    res.status(200).json({error:err})
                })
        })

        .post('/sign_in', (req, res) => {
         
          //  console.log(req.body);
            userCtrl
                .sign_in(req.body.email, req.body.password)
                .then(response => {
                    res
                        .status(201)
                        .json({ response: response })
                })
                .catch(err => {
                    console.log("Err ", err)
                    res.status(200).send(err)
                })
        })
     
    // .put('/:id', tvShowCtrl.updatetvShow)
    //.delete('/:id', tvShowCtrl.deletetvShow);
    //.post('/', tvShowCtrl.addtvShow)
    //.get('/',tvShowCtrl.listTvShows)
    // .get('/:id', tvShowCtrl.gettvShow)
})




module.exports = app;
