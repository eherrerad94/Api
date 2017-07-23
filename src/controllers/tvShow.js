import tvShow from '../models/tvShow';

const listTvShows = () => {
    return tvShow.find({})
        .then(tvShows => {
            console.log("tvshows ",tvShows)
            return tvShows
        })
        .catch(err => {
            console.log("listTvShow error ", err);
            return 'Something went wrong';
        });
};

const addTvShow = (tvshow) => {
    var newTvShow = new tvShow(tvshow);
    return newTvShow
        .save()
        .then(tvShow => {
            console.log('Adding a new tvShow');
            return tvShow;
        })
        .catch(err => {
            console.log("Error adding a new tvshow: ", err);
            return 'Something went wrong';
        }); 
};

const getTvShow = (id) => {
    return tvShow.findById(id)
        .then(tvShow =>{
            console.log('Get one tvShow: ', tvShow)
            return tvShow;
        })
        .catch(err =>{
            console.log('error getting a tvShow: ',err)
            return 'Something went wrong';
        })
};

const updateTvShow = (id, body) => {
    return tvShow
        .findByIdAndUpdate(id, body)
        .then( tvShow => {
            console.log('Updating a tvShow')
            return tvShow;
        })
        .catch(err => {
            console.log('Error updating a tvShow: ',err)
            return "Something went wrong"
        })
}; 


const deleteTvShow = (id) => {
    return tvShow
        .remove({_id: id})
        .then( tvShow =>{
            console.log('Deleting a tvshow with id ', id)
            return tvShow;
        })
        .catch(err => {
            console.log('error deleting a tvshow ',err)
            return 'somethin went wrong'
        })
}

module.exports = {
    listTvShows,
    addTvShow,
    getTvShow,
    updateTvShow,
    deleteTvShow,
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
