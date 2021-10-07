const express = require('express');
const router = express.Router();
const Park = require('../models/park');
const User = require('../models/user.js');

// INDEX
// GET /park
router.get('/', (req, res, next) => {
	Park.find()
		.then((parks) => res.json(parks))
		.catch(next);
});

// SHOW
// GET /parks/:id
router.get('/:id', (req, res, next) => {
	const id = req.params.id;
	Park.findById(id)
		.populate('users')
		.then((park) => res.json(park))
		.catch(next);
});

// CREATE
// POST /parks/
router.post('/', (req, res, next) => {
	const parkData = req.body;
	Park.create(parkData)
		.then((park) => res.status(201).json(park))
		.catch(next);
});

// UPDATE
// PATCH /parks/:id
router.patch('/:id', (req, res, next) => {
	const id = req.params.id;
	const parkData = req.body;
	Park.findOneAndUpdate({ _id: id }, parkData, { new: true })
		.then((park) => res.json(park))
		.catch(next);
});


router.put('/wantToSee/:id/users/:userId', (req, res, next) => {
	let updatedPark;
	Park.findByIdAndUpdate(
		req.params.id,
		{ $push: { users: req.params.userId } },
		{ new: true }
	)
		.then((park) => {
			updatedPark = park;
		})
		.then(() => {
			User.findByIdAndUpdate(
				req.params.userId,
				{ $push: { myParks: { park: req.params.id, seen: false } } },
				{ new: true }
			).then(() => res.json(updatedPark));
		})
		.catch(next);
});


router.put('/parksSeen/:id/users/:userId', (req, res, next) => {
	User.findById(req.params.userId)
		.then((user) => {
			// find the park with the correct id match
			const parkToUpdate = user.myParks.find((x) => x.park == req.params.id);
			// update the seen property
			parkToUpdate.seen = true;
			return user.save();
		})
		.then((user) => res.json(user))
		.catch(next);
})

// DESTROY
// DELETE /parks/:id
router.delete('/:id', (req, res, next) => {
	const id = req.params.id;
	Park.findOneAndDelete({ _id: id })
		.then(() => res.sendStatus(204))
		.catch(next);
});

module.exports = router;
