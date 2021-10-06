const mongoose = require('../db/connection');
const Review = require('./review').schema;

const parkSchema = new mongoose.Schema({
	ParkName: String,
	ParkDetails: String,
	ParkImage: String,
	ParkLocation: String,
	reviews: [Review],
	users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, {strict: false});

const Park = mongoose.model('Park', parkSchema)

 module.exports = Park