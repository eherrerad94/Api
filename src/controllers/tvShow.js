import mongoose from 'mongoose';
import '../models/tvShow';
const tvShow = mongoose.model('tvShow');

const listtvShows = ((req, res) => {
    console.log("GET tvShows")
    tvShow
        .find()
        .then(tvShows => {
            res.send('Hello from api/v1/tvShow');
            // res.status(200).jsonp(tvShows);
            console.log(tvShows);
        })
        .catch(err => {
            res.send(500, err.message);
            console.log('Error:', err)
        })
});

// tvShow.find({}, function(err,tvShow){
//     if(err)
//         res.send(err)
//     res.json(tvShow);
// });

const addtvShow = (req, res) => {
    var newtvShow = new tvShow(req.body);
    newtvShow
        .save()
        .then(tvShow => {
            console.log("Adding a tvShow")
            res.json(tvShow);
        })
        .catch(err => {
            console.log("Error adding a tvShow: ", err)
        })
};


const gettvShow = (req, res) => {
    const id = req.params.tvShowId;
    tvShow
        .findById(id)
        .then(tvShow => {
            console.log('GET one tvShow: ', tvShow);
            res.json(tvShow);
        })
        .catch(err => {
            console.log('Error getting a tvShow: ', err);
            res.send(err);
        })
};

const updatetvShow = (req, res) => {
    tvShow
        .findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true })
        .then(tvShow => {
            console.log("updating a tvShow: ", tvShow)
            res.json(tvShow);
        })
        .catch(err => {
            console.log("error updating a tvShow: ", Error)
            res.send(err)
        })
};

const deletetvShow = (req, res) => {
    tvShow
        .remove({ _id: req.params.taskId })
        .then(tvShow => {
            res.json({ message: 'tvShow sucessfully deleted' });
        })
        .catch(err => {
            res.send(err);
            console.log('error deleting a tvShow ',err)
        })
};

module.exports = {
    listtvShows,
    addtvShow,
    gettvShow,
    updatetvShow,
    deletetvShow
}