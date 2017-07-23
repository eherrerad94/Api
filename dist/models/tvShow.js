'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var tvShowSchema = new Schema({
				title: { type: String },
				year: { type: Number },
				country: { type: String },
				poster: { type: String },
				seasons: { type: Number },
				genre: { type: String, enum: ['Drama', 'Fantasy', 'Sci-Fi', 'Thriller', 'Comedy'] },
				summary: { type: String }
});

module.exports = _mongoose2.default.model('tvshow', tvShowSchema);