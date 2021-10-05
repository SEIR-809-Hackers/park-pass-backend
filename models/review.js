
const mongoose = require('../db/connection.js');

const reviewSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		body: {
			type: String,
			required: true,
		},
        author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        parkId: String,
	},
	{
		timestamps: true,
	}
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
