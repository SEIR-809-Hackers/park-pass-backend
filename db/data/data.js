const fs = require('fs');
const axios = require('axios');

url = `https://developer.nps.gov/api/v1/parks?api_key=uDMFcggPK0EXdo1IqTFhAxh6jz2NXc0DoNEoa9t7`;
class FormatData {
	constructor(data) {
		console.log(data);
		this.parkName = data.fullName;
		this.parkDetails = data.description;
		this.images = data.images ? this.getImages(data.images) : '';
		this.parkLocation = data.addresses[0]
			? this.formatLocation(data.addresses[0])
			: '';
		this.latitude = data.latitude;
		this.longitude = data.longitude;
		this.activities = [...data.activities];
	}

	getImages(imgArr) {
		return imgArr.reduce((acc, item) => {
			let newObj = { title: item.title, url: item.url };
			return [...acc, newObj];
		}, []);
	}

	formatLocation(obj) {
		return `${obj.line2} ${obj.line1} ${obj.city} ${obj.stateCode} ${obj.postalCode}`;
	}
}

axios
	.get(url)
	.then((res) => {
		let results = res.data.data; // array of parks [{park}, {park}, {}]
		let data;
		if (results.length) {
			data = results.map((park) => {
				// console.log(park)
				// take park pass into class to format()
				//return that, map retuns array
				return new FormatData(park);
			});
		}
		// [{}, {}, {}, {}]
		const parkData = JSON.stringify(data);

		fs.writeFile('db/data/data.json', parkData, (err) => {
			if (err) {
				console.log(err);
			} else {
				console.log('Successfully written! 📝');
			}
		});
	})
	.catch((err) => console.log(err));
