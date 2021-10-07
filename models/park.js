const mongoose = require('../db/connection');
const Review = require('./review').schema;

const parkSchema = new mongoose.Schema({
	parkName: String,
	parkDetails: String,
	images: [],
	parkLocation: String,
	reviews: [Review],
	activities: [],
	users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const Park = mongoose.model('Park', parkSchema);

module.exports = Park;
