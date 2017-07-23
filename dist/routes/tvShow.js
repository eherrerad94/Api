'use strict';

var _tvShow = require('../controllers/tvShow');

var _tvShow2 = _interopRequireDefault(_tvShow);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = _express2.default.Router();

app.group('/tvShow', function (router) {
    router.get('/', function (req, res) {
        _tvShow2.default.listTvShows().then(function (tvShowList) {
            console.log("tvShows:", tvShowList);
            res.status(200).json({
                tvShowList: tvShowList,
                length: tvShowList.length,
                status: 200
            });
        }).catch(function (err) {
            console.log("Err:", err);
            res.status(200).send(err);
        });
    }).get('/:id', function (req, res) {
        var id = req.params.id;
        _tvShow2.default.getTvShow(id).then(function (tvShow) {
            res.status(200).json({ tvShow: tvShow });
        }).catch(function (err) {
            console.log("Err ", err);
            res.status(200).send(err);
        });
    }).post('/', function (req, res) {
        var tvshow = req.body;
        _tvShow2.default.addTvShow(tvshow).then(function (tvShow) {
            res.status(200).json({ tvShow: tvShow });
        }).catch(function (err) {
            console.log("Err ", err);
            res.status(200).send(err);
        });
    }).put('/:id', function (req, res) {

        var id = req.params.id;
        var body = req.body;
        _tvShow2.default.updateTvShow(id, body).then(function (tvShow) {
            console.log("updating a tvShow: ", tvShow);
            res.status(200).json({ tvShow: tvShow });
        }).catch(function (err) {
            console.log("error updating a tvShow: ", Error);
            res.status(200).send(err);
        });
    }).delete(':/id', function (req, res) {
        var id = req.params.id;
        _tvShow2.default.deleteTvShow(id).then(function (tvShow) {
            res.status(200).send(tvShow);
        }).catch(function (err) {
            res.status(200).send(err);
        });
    });
    // .put('/:id', tvShowCtrl.updatetvShow)
    //.delete('/:id', tvShowCtrl.deletetvShow);
    //.post('/', tvShowCtrl.addtvShow)
    //.get('/',tvShowCtrl.listTvShows)
    // .get('/:id', tvShowCtrl.gettvShow)
});

module.exports = app;