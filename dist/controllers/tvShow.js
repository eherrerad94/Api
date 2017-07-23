"use strict";

var _tvShow = require("../models/tvShow");

var _tvShow2 = _interopRequireDefault(_tvShow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var listTvShows = function listTvShows() {
    return _tvShow2.default.find({}).then(function (tvShows) {
        console.log("tvshows ", tvShows);
        return tvShows;
    }).catch(function (err) {
        console.log("listTvShow error ", err);
        return 'Something went wrong';
    });
};

var addTvShow = function addTvShow(tvshow) {
    var newTvShow = new _tvShow2.default(tvshow);
    return newTvShow.save().then(function (tvShow) {
        console.log('Adding a new tvShow');
        return tvShow;
    }).catch(function (err) {
        console.log("Error adding a new tvshow: ", err);
        return 'Something went wrong';
    });
};

var getTvShow = function getTvShow(id) {
    return _tvShow2.default.findById(id).then(function (tvShow) {
        console.log('Get one tvShow: ', tvShow);
        return tvShow;
    }).catch(function (err) {
        console.log('error getting a tvShow: ', err);
        return 'Something went wrong';
    });
};

var updateTvShow = function updateTvShow(id, body) {
    return _tvShow2.default.findByIdAndUpdate(id, body).then(function (tvShow) {
        console.log('Updating a tvShow');
        return tvShow;
    }).catch(function (err) {
        console.log('Error updating a tvShow: ', err);
        return "Something went wrong";
    });
};

var deleteTvShow = function deleteTvShow(id) {
    return _tvShow2.default.remove({ _id: id }).then(function (tvShow) {
        console.log('Deleting a tvshow with id ', id);
        return tvShow;
    }).catch(function (err) {
        console.log('error deleting a tvshow ', err);
        return 'somethin went wrong';
    });
};

module.exports = {
    listTvShows: listTvShows,
    addTvShow: addTvShow,
    getTvShow: getTvShow,
    updateTvShow: updateTvShow,
    deleteTvShow: deleteTvShow
    // listtvShows,
    // addtvShow,
    // gettvShow,
    // updatetvShow,
    // deletetvShow
};

// const addtvShow = ((req, res) => {
//     var newtvShow = new tvShow(req.body);
//     return newtvShow
//         .save()
//         .then(tvShow => {
//             console.log("Adding a tvShow")
//             res.json(tvShow);
//         })
//         .catch(err => {
//             console.log("Error adding a tvShow: ", err)
//         })
// });

// const listtvShows = ((req, res) => {
//     console.log("GET tvShows")
//     tvShow
//         .find()
//         .then(tvShows => {
//             res.send('Hello from api/v1/tvShow');
//             // res.status(200).jsonp(tvShows);
//             console.log(tvShows);
//         })
//         .catch(err => {
//             res.send(500, err.message);
//             console.log('Error:', err)
//         })
// });

// const gettvShow = ((req, res) => {
//     const id = req.params.tvShowId;
//     return tvShow
//         .findById(id)
//         .then(tvShow => {
//             console.log('GET one tvShow: ', tvShow);
//             res.json(tvShow);
//         })
//         .catch(err => {
//             console.log('Error getting a tvShow: ', err);
//             res.send(err);
//         });
// });

// const updatetvShow = ((req, res) => {
//     return tvShow
//         .findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true })
//         .then(tvShow => {
//             console.log("updating a tvShow: ", tvShow)
//             res.json(tvShow);
//         })
//         .catch(err => {
//             console.log("error updating a tvShow: ", Error)
//             res.send(err)
//         });
// });

// const deletetvShow = (req, res) => {
//     return tvShow
//         .remove({ _id: req.params.taskId })
//         .then(tvShow => {
//             res.json({ message: 'tvShow sucessfully deleted ', tvshow: tvShow });
//         })
//         .catch(err => {
//             res.send(err);
//             console.log('error deleting a tvShow ', err)
//         })
// };