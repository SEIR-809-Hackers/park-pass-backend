const express = require('express');
const { requireToken } = require('../middleware/auth');
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
router.post('/', requireToken, (req, res, next) => {
	const parkData = req.body;
	Park.create(parkData)
		.then((park) => res.status(201).json(park))
		.catch(next);
});

// UPDATE
// PATCH /parks/:id
router.patch('/:id', requireToken, (req, res, next) => {
	const id = req.params.id;
	const parkData = req.body;
	Park.findOneAndUpdate({ _id: id }, parkData, { new: true })
		.then((park) => res.json(park))
		.catch(next);
});


router.put('/wantToSee/:id/users/:userId', requireToken, (requireToken, req, res, next) => {
	let updatedPark;
	Park.findByIdAndUpdate(
		req.params.id,
		{ $addToSet: { users: req.params.userId } },
		{ new: true }
	)
		.then((park) => {
			updatedPark = park;
		})
		.then(() => {
			User.findByIdAndUpdate(
				req.params.userId,
				{ $addToSet: { myParks: { park: req.params.id, seen: false } } },
				{ new: true }
			).then(() => res.json(updatedPark));
		})
		.catch(next);
});


router.put('/parksSeen/:id/users/:userId', requireToken, (requireToken, req, res, next) => {
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
// delete parks from user Parks array
router.delete(
	'/deletePark/:id/users/:userId',
	requireToken,
	async (requireToken, req, res, next) => {
		let user = await User.findById(req.params.userId)
		// find the park with the correct id match
		const parksToSave = user.myParks.filter(park => park.park != req.params.id);
		// update the seen property
		// parkToUpdate.seen = true;
		// user.pull({_id: parkToDelete._id })
		user.myParks = parksToSave;
		user.save();
		res.json(user)
			
	}
);

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

// DELETE /parks/:id
router.delete('/:id', (req, res, next) => {
	const id = req.params.id;
	Park.findOneAndDelete({ _id: id })
		.then(() => res.sendStatus(204))
		.catch(next);
});
// export module
module.exports = router;
