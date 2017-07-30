import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const url = new Schema({
    prettyUrl: {type: String},
    longUrl: {type: String, required: true},
    created_at: {type: Date, default: Date.now}

})


module.exports = mongoose.model('url', url);