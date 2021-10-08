const mongoose = require('../db/connection');
const Review = require('./review.js').schema;
const Park = require('./park.js').schema;

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		myParks: [
			{
				park: { type: mongoose.Schema.Types.ObjectId, ref: 'Park' },
				seen: { type: Boolean, default: false },
			},
		],
	},
	{
		timestamps: true,
		toJSON: {
			virtuals: true,
			// ret is the returned Mongoose document
			transform: (_doc, ret) => {
				delete ret.password;
				return ret;
			},
		},
	}
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
