const parkSeeds = require('./data.json');
const Park = require('../../models/park');
const User = require('../../models/user');

Park.deleteMany({})
	.then(() => User.deleteMany({}))
	.then(() => {
		// create a new User
		User.create({ name: 'Test' })
			.then(() => {
				Park.insertMany(parkSeeds);
			});
	});
