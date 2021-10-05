// controllers/reviews.js
const express = require('express');
const router = express.Router();

// require restaurant model
const Park = require('./../models/park');

// CREATE
// POST /reviews/
router.post('/', (req, res, next) => {
	// get the review data from the body of the request
	const reviewData = req.body;
	// get the restaurant id from the body
	const parkId = reviewData.parkId;
	// find the park by its id
	Park.findById(parkId)
		.then((park) => {
			// add review to park
			park.reviews.push(reviewData);
			// save park
			return park.save();
		})
		// send response back to client
		.then((park) => res.status(201).json({ park: park }))
		.catch(next);
});

// DESTROY
// DELETE /reviews/:id
router.delete('/:id', (req, res, next) => {
	const id = req.params.id;
	Park.findOne({ 'reviews._id': id })
		.then((park) => {
			park.reviews.id(id).remove();
			return park.save();
		})
		.then(() => res.sendStatus(204))
		.catch(next);
});

// UPDATE
// PATCH /reviews/:id
router.patch('/:id', (req, res, next) => {
	const id = req.params.id;
	const reviewData = req.body;

	Park.findOne({
		'reviews._id': id,
	})
		.then((park) => {
			const review = park.reviews.id(id);
			review.set(reviewData);
			return park.save();
		})
		.then(() => res.sendStatus(204))
		.catch(next);
});

module.exports = router;
