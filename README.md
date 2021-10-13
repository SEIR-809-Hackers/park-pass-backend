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
- POST: /users
- PUT: /users/:id
- DELETE: /users/:id

Reviews:
- GET: /reviews
- POST: /reviews
- PUT: /reviews/:id
- DELETE: /reviews/:id


Controllers
- UserController
- ParkController
- ReviewControlle

Models
- User Model
- Park Model
- ReviewModel

  
f) Contribution Guidelines:
  Please visit our GitHub page at : https://github.com/SEIR-809-Hackers/seir-project-3


---A link to the project's main repository
---A link to the project's issue tracker
