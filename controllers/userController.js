const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res, next) => {
	User.find({})
		.populate('myParks.park')
		.then((users) => res.json(users))
		.catch(next);
});

router.get('/:id', (req, res, next) => {
	User.findById(req.params.id)
		.then((user) => res.status(200).json(user))
		.catch(next);
});

router.post('/', (req, res, next) => {
	User.create(req.body)
		.then((user) => res.status(201).json(user))
		.catch(next);
});

module.exports = router;
