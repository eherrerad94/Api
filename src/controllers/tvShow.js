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

const listTvShows = () => {
    return tvShow.find()
        .then(tvShows => {
            console.log("Son: ", tvShows.length);
            if (tvShows.length != 0) {
                const tvShows = tvShows.rows.map(tvShow => {
                    const { doc } = tvShow;
                    return `TV Show ${doc._id}: ${doc.name}, color ${doc.color}`;
                });
                return tvShows;
            }
           // tvShows = {data: "no tvshows were found"};
            console.log(tvShows);
            return tvShows;

        })
        .catch(err => {
            console.log("listTvShow error ", err);
            return 'Something went wrong';
        })
}
// tvShow.find({}, function(err,tvShow){
//     if(err)
//         res.send(err)
//     res.json(tvShow);
// });

const addtvShow = (req, res) => {
    var newtvShow = new tvShow(req.body);
    return newtvShow
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
    return tvShow
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
   return tvShow
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
    return tvShow
        .remove({ _id: req.params.taskId })
        .then(tvShow => {
            res.json({ message: 'tvShow sucessfully deleted' });
        })
        .catch(err => {
            res.send(err);
            console.log('error deleting a tvShow ', err)
        })
};

module.exports = {
    listTvShows,
    addtvShow,
    gettvShow,
    updatetvShow,
    deletetvShow
}