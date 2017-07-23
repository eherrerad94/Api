import tvShowCtrl from '../controllers/tvShow';
import express from 'express';

const app = express.Router();
app.group('/tvShow', (router) => {
    router
        .get('/', (req, res) => {
            console.log("Before list...")
            tvShowCtrl
                .listTvShows()
                .then(tvShows => {
                    console.log("tvShows:" ,tvShows);
                    console.log("Hola:", tvShows)
                    res.status(200).jsonp(tvShows);               
                })
                .catch(err => {
                    console.log("Err:", err)
                    res.status(200).send(err);
                })
        })
        .post('/', tvShowCtrl.addtvShow)
        .get('/:id', tvShowCtrl.gettvShow)
        .put('/:id', tvShowCtrl.updatetvShow)
        .delete('/:id', tvShowCtrl.deletetvShow);
})




module.exports = app;
