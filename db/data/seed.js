const parkSeeds = require('./data.json');
const Park = require('../../models/park');
const User = require('../../models/user');

// Park.deleteMany({})
// 	.then(() => User.deleteMany({}))
// 	.then(() => {
// 		// create a new User
// 		User.create({ 
// 			email: "test@email.com",
// 			username: 'test',
// 			password: "mypassword" })
// 			.then(() => {
// 				Park.insertMany(parkSeeds);
// 			});
// 	});

Park.deleteMany({})
	.then(() => {
		// insert parks
				Park.insertMany(parkSeeds);
	});