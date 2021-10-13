Sahira, Byron, Pablo, Kaleb

### Your project idea 
>Brief 2-3 sentence description of your app
> ParkPass is a full-stack application that allows a user to search through a database of national parks and save them. When saved, a park will be added to a user’s page and displayed as a card. Users can then check off if they’ve hiked at the selected park and add a review of their experience, which can be created, edited, and deleted. 

### List of models and their properties
UserModel: {name: String, myParks: {wantToSee: [String], parkSeen: [String]}, reviews: [ReviewSchema]}
ParksModel: [ {ParksName: String, ParkDetails: String, ParkImage: String, ParkLocation: String, Park Reviews: [ReviewSchema]} ]
ReviewModel: {Park: String, Title: String, Author: 'user', Body: String}

### Scrum manager/project manager's name: Sahira 
### User stories
MVP: 
- “As a user, I would like to be able to see a list of national parks, with a brief description on the location so I can browse the collection” 
- “As a user, I would like to be able to use my ParkPass to add parks that I would like to hike at.”
- “As a user, I would like to mark off parks I have hiked at.”
- “As a user, I would like to be able to provide reviews for the parks I’ve hiked.”


Bronze: 
- As a user, I would like to be able to get information on the campgrounds within the park in order to better plan my trip. 
- As a user, I would like to be able to get a list of recommended activities to do within the park (astronomy, hiking, wildlife watching, etc.) in order to better understand what type of events each destination offers. 

Silver: 
- As a user, I would like to get a “Things To Do” List for specific things I can do at the park and add these to my own Activities list for better planning. 

Gold:
- As a user, I would like to be able to log in to my own personal PassPark account so that I can have a personal profile. 
- As a user, I would like to be able to track my miles hiked and have a graph display the data.
- As a user, I would like to be able to see live footage of the campgrounds in order to virtually experience what it would like to be there. 

### Wireframes

<img width="779" alt="Screen Shot 2021-10-05 at 1 15 05 PM" src="https://media.git.generalassemb.ly/user/38087/files/44454300-25de-11ec-8efb-296070ab09fb">

<img width="728" alt="Screen Shot 2021-10-05 at 1 14 57 PM" src="https://media.git.generalassemb.ly/user/38087/files/adc55180-25de-11ec-9f11-a98bd97c4818">


<img width="446" alt="Screen Shot 2021-10-05 at 1 14 34 PM" src="https://media.git.generalassemb.ly/user/38087/files/4dceab00-25de-11ec-8a53-aa2087148636">

<img width="451" alt="Screen Shot 2021-10-05 at 1 14 29 PM" src="https://media.git.generalassemb.ly/user/38087/files/4f986e80-25de-11ec-85a1-42396671737a">
