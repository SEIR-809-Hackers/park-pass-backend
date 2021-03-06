// Require the needed npm packages
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js');
const { Strategy, ExtractJwt } = require('passport-jwt');

const secret =
	process.env.JWT_SECRET || 'secret';


const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: secret,
};

// Using strategy in order to make a request to the backend for the users information
// jwt_payload is passed into the callback function and this is used to extract the user via ID
const strategy = new Strategy(opts, function (jwt_payload, done) {
	// In the callback we run our custom code. With the data extracted from
	// the token that we're passed as jwt_payload we'll have the user's id.
	// Using Mongoose's `.findOneById()` method, we find the user in our database
	User.findById(jwt_payload.id)
		// To pass the user on to our route, we use the `done` method that
		// that was passed as part of the callback.  The first parameter of
		// done is an error, so we'll pass null for that argument and then
		// pass the user doc from Mongoose.  This adds the user to the request object
		// as request.user!
		.then((user) => done(null, user))
		// If there was an error, we pass it to done so it is eventually handled
		// by our error handlers in Express
		.catch((err) => done(err));
});

// Now that we've constructed the strategy, we 'register' it so that
// passport uses it when we call the `passport.authenticate()`
// method later in our routes
passport.use(strategy);

// Initialize the passport middleware based on the above configuration
passport.initialize();

// Create a variable that holds the authenticate method so we can

const requireToken = passport.authenticate('jwt', { session: false });

// Create a function that takes the request and a user document
// and uses them to create a token to send back to the user
const createUserToken = (req, user) => {
	// Make sure that we have a user, if it's null that means we didn't
	// find the email in the database.  If there is a user, make sure
	// that the password is correct.  For security reason, we don't want
	// to tell the client whether the email was not found or that the
	// password was incorrect.  Instead we send the same message for both
	// making it much harder for hackers.
	if (
		!user ||
		!req.body.password ||
		!bcrypt.compareSync(req.body.password, user.password)
	) {
		const err = new Error('The provided username or password is incorrect');
		err.statusCode = 422;
		throw err;
	}
	// If no error was thrown, we create the token from user's id and
	// return the token
	return jwt.sign({ id: user._id, }, secret, { expiresIn: 36000 });
};

module.exports = {
	requireToken,
	createUserToken,
};
