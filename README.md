# WayHome

#### WayHome is a Full Stack Web Application which helps owners find their lost pets. It's a user friendly application with ability to create a lost or found pet advertisement, track lost pet movement, easily connect to a person who has seen or found your pet. Application is built using ReactJS at the frontend and Ruby on Rails, Google Maps API and EmailJS and PostgreSQL DB at the backend. All the styles are custom-made CSS.

###### Let's take a look at the main page. First of all, we can sign in or sign up by clicking buttons accordingly at the navigation bar
![MainPage](https://i.ibb.co/DGPsWd3/1.png)

###### We can create a new account by filling name, email, password, confirming password and adding an avatar image
![SignUp Form](https://i.ibb.co/pLZxyY5/2.png)

###### We have succesfully created the account, all the user information is now stored at the PostgreSQL DB and local cookie has the session information. At the main page we can see all the pets, pets pictures are interactive and can be scrolled without opening a new page. Each of the pets can have one of three flags: "Scout Way Home" means that the pet is lost, "Returned Home" means that the pet if found way home and "In a Foster Home" means that the pet has been picked up by the volunteers. 
![LoggedIn MainPage](https://i.ibb.co/mhpScYd/3.png)

###### We can create a new AD by pressing "Create new ad" at the top pf the page, and new form will appear, where you can type all the parameters of the pet, like breed, colour, type, description, time lost, upload some pictures and most importantly, you can point to the location where it was lost on the main and the address will be determined automatically. 
![NewPet Form](https://i.ibb.co/DbPwf80/9.png)
![Point at the map](https://i.ibb.co/h1ZPksF/10.png)

###### Or if you found a pet on the street you can click "I've found someone's pet" and be taken to a search component of the application. Here you can search through all the pets by typing colour, breed or animal type to see if the ad already exists.
![Search Component](https://i.ibb.co/d5bBYzB/8.png)

###### You can click on the pet's name and be taken to the main page of the animal, where you can see all the information and pictures in precise. Every user can create dofferent comments on the page as well as see the location where the pet was lost and spotted by other people by taking a look at the map.
![Pet Main Ad](https://i.ibb.co/6trnF58/13.png)
![Pet Main Ad2](https://i.ibb.co/SvLnhnB/14.png)

###### If you've seen tht pet, you can click I've seen (name) button and point to the location where you've seen the animal on the map, and new spot will be added. It will be helpful for pet owner and searching volunteers to know where the animal was! Or if you found a pet you can press the button "I've found (petname)" and contact a person directly. Person will be automatically notified by the email containin the message and email which user can use to get back to you.
![Contact User](https://i.ibb.co/gZH9LV9/15.png)

###### Lastly,you can easily create a lost pet leaflet, save it as a PDF file and print it out to put on the streets. Application has a form which you can fill and get the file all ready in just a couple of clicks!
![Contact User](https://i.ibb.co/TrSNJHb/11.png)
![Contact User](https://i.ibb.co/XXDvn0v/12.png)
