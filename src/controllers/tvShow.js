import mongoose  from 'mongoose';
import '../models/tvShow';
const tvShow = mongoose.model('tvShow');

const listtvShows = function(req,res){
    console.log("GET tvShows")
    tvShow.find(function(err,tvShows){
                if (err) {
                 res.send(500, err.message);
                }

                console.log('GET /tvShows')
       res.send('Hello from api/v1/tvShow');
        // res.status(200).jsonp(tvShows);
        console.log(tvShows);
    });

    // tvShow.find({}, function(err,tvShow){
    //     if(err)
    //         res.send(err)
    //     res.json(tvShow);
    // });


};

const addtvShow = function(req,res){
    var newtvShow =  new tvShow(req.body);
    newtvShow.save(function(err,tvShow){
        if(err)
            res.send(err)
        res.json(tvShow);
    });
};


const gettvShow = function(req,res){
    tvShow.findById(req.params.tvShowId, function(err,tvShow){
        if(err)
            res.send(err);
        res.json(tvShow);
    });
};

const updatetvShow = function(req,res){

    tvShow.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err,tvShow){
        if(err)
            res.send(err)
        res.json(tvShow);
    });
};

const deletetvShow = function(req,res){
    tvShow.remove({
        _id: req.params.taskId
    }, function(err,tvShow){
        if(err)
            res.send(err);
        res.json({message: 'tvShow sucessfully deleted'});
    });
};

module.exports = {
    listtvShows,
    addtvShow,
    gettvShow,
    updatetvShow,
    deletetvShow
}