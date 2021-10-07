const axios = require('axios');

url = `https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=uDMFcggPK0EXdo1IqTFhAxh6jz2NXc0DoNEoa9t7`;

function getData(url) {
	let results;
	// GET DATA
	axios.get(url)
		.then((res) => {
			return results = res.data.data[0];
		})
		.then(() => {
			let data = new FormatData(results);
            return data;
			// GET DATA
		})
		.catch((err) => console.log(err));
	// FORMAT DATA
}

class FormatData {
	constructor(data) {
		this.parkName = data.fullName;
		this.parkDetails = data.description;
		// this.image = this.getImages(data.images);
		this.location = [...data.addresses];
		this.latitude = data.latitude;
		this.longitude = data.longitude;
		this.activities = [...data.activities];
	}

	getImages(imgArr) {
		return imgArr.reduce((acc, item) => {
			let newObj = { title: item.title, url: item.url };
			return acc.push(newObj);
		}, []);
	}
}

console.log(getData(url));
