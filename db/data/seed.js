const axios = require('axios');

url = `https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=uDMFcggPK0EXdo1IqTFhAxh6jz2NXc0DoNEoa9t7`;

axios.get(url)
		.then((res) => {
			let results = res.data.data[0];
            let data = new FormatData(results);
            console.log(data);
		})
		.catch((err) => console.log(err));

class FormatData {
	constructor(data) {
		this.parkName = data.fullName;
		this.parkDetails = data.description;
		// this.image = this.getImages(data.images);
		this.locations = [...data.addresses];
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
