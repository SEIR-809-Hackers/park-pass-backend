const axios = require('axios')

url =
	'https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=uDMFcggPK0EXdo1IqTFhAxh6jz2NXc0DoNEoa9t7';
axios.get(url)
    .then((res) => console.log(res.data))
    .catch(err => console.log(err));

    