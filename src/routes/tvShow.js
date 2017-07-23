import tvShowCtrl from '../controllers/tvShow';
import express from 'express';

const app  = express.Router();
app.group('/tvShow', (router) => {
    router
        .get('/',tvShowCtrl.listtvShows)
        .post('/',tvShowCtrl.addtvShow)
        .get('/:id',tvShowCtrl.gettvShow)
        .put('/:id',tvShowCtrl.updatetvShow)
        .delete('/:id',tvShowCtrl.deletetvShow);
})


module.exports = app;
