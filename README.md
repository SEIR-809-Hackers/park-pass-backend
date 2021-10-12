# park-pass-backend
A backend API for our parksPass website.

a) Description:

ParkPass is a full-stack application that allows a user to search through a database of national parks and save them. When saved, a park will be added to a user’s page and displayed as a card. Users can then check off if they’ve hiked at the selected park and add a review of their experience, which can be created, edited, and deleted. 


b) Brief Example:

You begin your park adventure by clicking the explore button, which will take you to a list of natural parks in the US, you can click a Park from the list and add it to your personal pass, but in order to do this, you need first to sign up, of course in the “sing up button” and then login. Then in your “My Park Pass” can see your parks, and click if you have haiked, and you can also delete a park from your Pass.


c) List of Features / User Stories:

--MVP: 
* As a user, I would like to be able to see a list of national parks, with a brief description on the location so I can browse the collection. (Complete)
* As a user, I would like to be able to use my ParkPass to add parks that I would like to hike at. (Complete)
* As a user, I would like to mark off parks I have hiked at. (Complete)



--Bronze: 
* As a user, I would like to be able to get information on the campgrounds within the park in order to better plan my trip. 
* As a user, I would like to be able to get a list of recommended activities to do within the park (astronomy, hiking, wildlife watching, etc.) in order to better understand what type of events each destination offers.  (Complete)

--Silver: 
* As a user, I would like to get a “Things To Do” List for specific things I can do at the park and add these to my own Activities list for better planning. 

--Gold:
* As a user, I would like to be able to log in to my own personal PassPark account so that I can have a personal profile.(complete) 
* As a user, I would like to be able to track my miles hiked and have a graph display the data.
* As a user, I would like to be able to see live footage of the campgrounds in order to virtually experience what it would like to be there. 
* As a user, I would like to be able to provide reviews for the parks I’ve hiked.





d) List of Technologies Used:
   -Mongo DB
   -Postman
   -Express 
   -Node
    

e) Installation Instructions / Getting Started:
  Routes
Park:
GET: /parks
POST: /parks
PUT: /parks/:id
DELETE: /parks/:id
Routes
User:
GET: /users
POST: /users
PUT: /users/:id
DELETE: /users/:id
Routes
Reviews:
GET: /reviews
POST: /reviews
PUT: /reviews/:id
DELETE: /reviews/:id
Controllers
UserController
ParkController
ReviewControlle
Models
User Model
Park Model
ReviewModel

  
f) Contribution Guidelines:
  Please visit our GitHub page at : https://github.com/SEIR-809-Hackers/seir-project-3


---A link to the project's main repository
---A link to the project's issue tracker
