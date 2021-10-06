const axios = require('axios')

url =
	`https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=${process.env.API_KEY}`;
axios.get(url)
    .then((res) => console.log(res.data))
    .catch(err => console.log(err));
