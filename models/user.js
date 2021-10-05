const mongoose = require('../db/connection');
const Review = require('./review.js').schema;
const Park = require('./park.js').schema;

const UserSchema = new mongoose.Schema({
	name: String,
	myParks: {
		wantToSee: [String],
		parksSeen: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Park' }],
	},
});

const User = mongoose.model('User', UserSchema);

module.exports = User;