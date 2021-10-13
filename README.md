# ParkPass API
A backend API for our parksPass website.

a) Description:

This is a RESTful API with full CRUD features for Parks and Users. It allows users to search throught one hundred national parks across the United States. Parks can be added to users and users can be added as "explorers" for national parks. Currently the API supports three models: Parks, Users, and Reviews.


b) Brief Example:


## List of Technologies Used:
   -Mongo DB
   -Postman
   -Express 
   -Node
    

e) Installation Instructions / Getting Started:
  Routes
  
 ### Base Route: https://fast-springs-20221.herokuapp.com/
 ### Relevent Routes: 
- Parks: 
 - https://fast-springs-20221.herokuapp.com/parks
- Users:
 -https://fast-springs-20221.herokuapp.com/users
- Review:
 - Reviews are not rendered individually, but associated with an individual park.
 
## All Routes: 

Park:
- GET: /parks
- POST: /parks
- PUT: /parks/:id
- PUT: /parks/wantToSee/:id/users/:userId
- PUT: /parks/parkSeen/:id/users/:userId
- DELETE: /parks/:id
- DELETE: /parks/deletePark/:id/users/:userId

User:
- GET: /users
- GET: /users/getByUsername/:username
- POST: /users
- PUT: /users/:id
- DELETE: /users/:id

Reviews:
- POST: /reviews
- PUT: /reviews/:id
- DELETE: /reviews/:id

## Example Calls:
- GET: /parks
- Example Call via fetch: 
```
const parkURL = 'https://fast-springs-20221.herokuapp.com/parks';
		fetch(parkURL)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));

```
- Example Response (1):
```
[
{
"_id": "61665589eb902274179a8865",
"parkName": "Abraham Lincoln Birthplace National Historical Park",
"parkDetails": "For over a century people from around the world have come to rural Central Kentucky to honor the humble beginnings of our 16th president, Abraham Lincoln. His early life on Kentucky's frontier shaped his character and prepared him to lead the nation through Civil War. The country's first memorial to Lincoln, built with donations from young and old, enshrines the symbolic birthplace cabin.",
"images": [
{
"title": "The Memorial Building with fall colors",
"url": "https://www.nps.gov/common/uploads/structured_data/3C861078-1DD8-B71B-0B774A242EF6A706.jpg"
},
{
"title": "The Memorial Building",
"url": "https://www.nps.gov/common/uploads/structured_data/3C861263-1DD8-B71B-0B71EF9B95F9644F.jpg"
},
{
"title": "The Symbolic Birth Cabin of Abraham Lincoln",
"url": "https://www.nps.gov/common/uploads/structured_data/3C86137D-1DD8-B71B-0B978BACD7EBAEF1.jpg"
},
{
"title": "Statue of the Lincoln Family in the Visitor Center",
"url": "https://www.nps.gov/common/uploads/structured_data/3C8614D1-1DD8-B71B-0B1AF72CA452B051.jpg"
}
],
"parkLocation": " 2995 Lincoln Farm Road Hodgenville KY 42748",
"activities": [
{
"id": "13A57703-BB1A-41A2-94B8-53B692EB7238",
"name": "Astronomy"
},
{
"id": "D37A0003-8317-4F04-8FB0-4CF0A272E195",
"name": "Stargazing"
},
{
"id": "1DFACD97-1B9C-4F5A-80F2-05593604799E",
"name": "Food"
},
{
"id": "C6D3230A-2CEA-4AFE-BFF3-DC1E2C2C4BB4",
"name": "Picnicking"
},
{
"id": "DF4A35E0-7983-4A3E-BC47-F37B872B0F25",
"name": "Junior Ranger Program"
},
{
"id": "0B685688-3405-4E2A-ABBA-E3069492EC50",
"name": "Wildlife Watching"
},
{
"id": "5A2C91D1-50EC-4B24-8BED-A2E11A1892DF",
"name": "Birdwatching"
},
{
"id": "24380E3F-AD9D-4E38-BF13-C8EEB21893E7",
"name": "Shopping"
},
{
"id": "467DC8B8-0B7D-436D-A026-80A22358F615",
"name": "Bookstore and Park Store"
},
{
"id": "43800AD1-D439-40F3-AAB3-9FB651FE45BB",
"name": "Gift Shop and Souvenirs"
}
],
"users": [],
"reviews": [],
"__v": 0
}]
```

- Example Call for Users
```
const parkURL = 'https://fast-springs-20221.herokuapp.com/users';
		fetch(parkURL)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));

```

-Example Response: 
```
[
{
"_id": "616486be89dc421f32f06dba",
"email": "test@email.com",
"username": "test",
"myParks": [],
"createdAt": "2021-10-11T18:47:26.650Z",
"updatedAt": "2021-10-11T18:47:26.650Z",
"__v": 0,
"id": "616486be89dc421f32f06dba"
},
]
```

- Example Request to Associate add a Park to a Users Document:

```
let url = `https://fast-springs-20221.herokuapp.com/parks/wantToSee/${park_id_here}/users/${user_id_here}`;

				const res = await fetch(url, {
					'Content-Type': 'application/json',
					method: 'PUT',
					headers: {
						Authorization: `Bearer ${your_token_here}`)
						)}`,
					},
				});

```
- This put request DOES NOT take an object, instead the request is set up in a way that it creates a relationship between the Park and User in the backend and populates the relevent documents accordingly.

Controllers
- UserController
- ParkController
- ReviewController

Models
- User Model
- Park Model
- ReviewModel

  
## Contribution Guidelines
Please provide feedback as I'd love to improve!
- Report a bug
- Submit a fix
- Propose new features

### All Change Happens with Github Pull Requests
1. Fork the repo and create a new branch.
2. Any additional API's should be added to the documentation.
3. Make sure your code is tested.
5. Run num run lint for style unification!
4. Issue the pull request.

### Report bugs via Issue
1. Provide a description of the bug.
2. How it was produced and steps to reproduce. (Be thorough!)
3. Expected behavior and what actually happened.
4. Notes: Any errors you received that you think may be useful.
