//=============================================================================
// Basic Config
//=============================================================================
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;

//=============================================================================
// Middleware
//=============================================================================
// enable CORS to allow requests from clients of other origins
app.use(cors());
// `express.json` parses application/json request data and
//  adds it to the request object as request.body
app.use(express.json());
// `express.urlencoded` parses x-ww-form-urlencoded request data and
//  adds it to the request object as request.body
app.use(express.urlencoded({ extended: true }));

//=============================================================================
// ROUTES
//=============================================================================

// Redirect
app.get('/', (req, res) => {
	res.redirect('/parks');
});

// Park Routes
const parkController = require('./controllers/parkController.js');
app.use('/parks', parkController);

// Review Routes
const reviewController = require('./controllers/reviewController.js');
app.use('/reviews', reviewController);

// User Routes
const userController = require('./controllers/userController.js');
app.use('/users', userController);

// START SERVER

app.listen(PORT, () =>
	console.log('🌲 Parks API is listening on port: ' + PORT)
);
