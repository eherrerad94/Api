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
                    res
                        .status(200)
                        .json({
                            tvShowList: tvShowList,
                            length: tvShowList.length,
                            message: 'Ok' 
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
                    res
                        .status(200)
                        .json({ tvShow: tvShow, message: 'success'})
                })
                .catch(err => {
                    console.log("Err ", err)
                    res.status(200).send(err);
                })
        })
        .post('/', (req, res) => {

            tvShowCtrl
                .addTvShow(req.body)
                .then(tvShow => {
                    res
                        .status(201)
                        .json({ tvShow: tvShow , message: 'tvshow created successfully'})
                        console.log(tvShow);
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
                .then(response => {
                  //  console.log("updating a tvShow: ", tvShow)
                    res.status(200).json({ 
                        message: 'tvshow updated sucessfully',
                        newtvShow:  response.newTvShow, 
                        oldtvshow: response.oldTvShow 
                    });
                })
                .catch(err => {
                    console.log("error updating a tvShow: ", Error)
                    res.status(200).send(err)
                });
        })
        .delete('/:id', (req, res) => {
            console.log(req.params.id);
            tvShowCtrl
                .deleteTvShow(req.params.id)
                .then( tvshow => {
                    console.log(tvshow);
                    res.status(200).json({message: "TVShow deleted successfully", tvShowDeleted: tvshow});
                    tvshow.remove();
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
