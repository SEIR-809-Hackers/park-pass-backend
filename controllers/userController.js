const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
// Require the createUserToken method
const { createUserToken } = require('../middleware/auth');
const { requireToken } = require('../middleware/auth');

router.get('/', (req, res, next) => {
	User.find({})
		.populate('myParks.park')
		.then((users) => res.json(users))
		.catch(next);
});

router.get('/:id', (req, res, next) => {
	User.findById(req.params.id)
		.populate('myParks.park')
		.then((user) => res.status(200).json(user))
		.catch(next);
});


router.get('/:username', (req, res, next) => {
	User.findOne({username: req.params.username})
		.populate('myParks.park')
		.then((user) => res.status(200).json(user))
		.catch(next);
});


router.post('/signup', (req, res, next) => {
	bcrypt
		.hash(req.body.password, 10)
		// return a new object with the email and hashed password
		.then((hash) =>
			// when returning an object with fat arrow syntax, we
			// need to wrap the object in parentheses so JS doesn't
			// read the object curly braces as the function block
			({
				email: req.body.email,
				username: req.body.username,
				password: hash,
			})
		)
		// create user with provided email and hashed password
		.then((user) => User.create(user))
		// send the new user object back with status 201, but `hashedPassword`
		// won't be sent because of the `transform` in the User model
		.then((user) => res.status(201).json(user))
		// pass any errors along to the error handler
		.catch(next);
});

// SIGN IN
// POST /api/signin
router.post('/signin', async (req, res, next) => {
  	let user = await User.findOne({ username: req.body.username })
    // Pass the user and the request to createUserToken
    let token = createUserToken(req, user);
    res.json({ token, id : user._id })
    .catch(next);
});


module.exports = router;
