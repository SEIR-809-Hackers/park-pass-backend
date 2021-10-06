const mongoose = require('../db/connection');
const Review = require('./review.js').schema;
const Park = require('./park.js').schema;

const UserSchema = new mongoose.Schema({
	name: String,
	// myParks: [{ id: {type: mongoose.Schema.Types.ObjectId, ref: 'Park'}, seen: {type: 	Boolean, default: false }}]
	myParks: [
		{
			park: { type: mongoose.Schema.Types.ObjectId, ref: 'Park' },
			seen: { type: Boolean, default: false },
		},
	],
});


const User = mongoose.model('User', UserSchema);

module.exports = User;