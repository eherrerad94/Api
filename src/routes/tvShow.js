import tvShowCtrl from '../controllers/tvShow';
import express from 'express';
const app = express.Router();

app.group('/tvShow', (router) => {
    router
        .get('/', (req, res) => {
            tvShowCtrl
                .listTvShows()
                .then(tvShowList => {
                    console.log("tvShows:", tvShowList)
                    res.status(200).json({
                        tvShowList: tvShowList,
                        length: tvShowList.length,
                        status: 200
                    })
                })
                .catch(err => {
                    console.log("Err:", err)
                    res.status(200).send(err)
                })
        })
        .get('/:id', (req, res) => {
            const id = req.params.id;
            tvShowCtrl
                .getTvShow(id)
                .then(tvShow => {
                    res.status(200).json({ tvShow: tvShow })
                })
                .catch(err => {
                    console.log("Err ", err)
                    res.status(200).send(err);
                })
        })
        .post('/', (req, res) => {
            const tvshow = req.body;
            tvShowCtrl
                .addTvShow(tvshow)
                .then(tvShow => {
                    res.status(200).json({ tvShow: tvShow })
                })
                .catch(err => {
                    console.log("Err ", err)
                    res.status(200).send(err)
                })
        })
        .put('/:id', (req, res) => {

            const id = req.params.id;
            const body = req.body;
            tvShowCtrl
                .updateTvShow(id, body)
                .then(tvShow => {
                    console.log("updating a tvShow: ", tvShow)
                    res.status(200).json({tvShow: tvShow});
                })
                .catch(err => {
                    console.log("error updating a tvShow: ", Error)
                    res.status(200).send(err)
                });
        })
        .delete(':/id', (req, res) =>{
            const id = req.params.id;
            tvShowCtrl
                .deleteTvShow(id)
                .then(tvShow => {
                    res.status(200).send(tvShow);
                })
                .catch(err => {
                    res.status(200).send(err);
                })
        })
    // .put('/:id', tvShowCtrl.updatetvShow)
    //.delete('/:id', tvShowCtrl.deletetvShow);
    //.post('/', tvShowCtrl.addtvShow)
    //.get('/',tvShowCtrl.listTvShows)
    // .get('/:id', tvShowCtrl.gettvShow)
})




module.exports = app;
