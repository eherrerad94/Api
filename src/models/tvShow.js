import mongoose from 'mongoose';

const tvShowSchema = new mongoose.Schema({
    title:   { type: String  },
	year:    { type: Number  },
	country: { type: String },
	poster:  { type: String },
	seasons: { type: Number },
	genre:   { type: String, enum:  ['Drama', 'Fantasy', 'Sci-Fi', 'Thriller', 'Comedy'] },
	summary: { type: String }
})



module.exports = mongoose.model('tvShow',tvShowSchema);