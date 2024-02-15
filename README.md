# WeatherHub
FINAL PROJECT DEMONSTRATION – TEAM SPACE360°

WEATHER HUB 
1. Introduction

	WeatherHub is an innovative weather application that seamlessly integrates frontend components, MySQL databases, and backend web services to deliver a holistic user experience. The application's user authentication system ensures secure login, logout, and register functionalities, enabling users to access personalized features. With features like intuitive map-based location search and allowing users to pinpointing the desired location on the world map using cursor to get the weather forecast on that location.

2. Software requirements:
Ensure the following software is installed on your devices.
1. node.js and npm need to be installed.
2. MySQL needs to be installed.

3.Database Setup:
1. Make sure MySQL is running
2. Create the necessary database and tables.
    Database name	: 	weatherhub
    Table		: 	users

Run this query:

CREATE DATABASE IF NOT EXISTS weatherhub;
USE weatherhub;
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
use weatherhub;
insert into users(username,email, password) values("Admin","admin@gmail.com","admin123@")

3.1 Codebase and Configuration:
1.Obtain the latest codebase for the weatherhub project.
2.Configure Database connection:

const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    database : 'weatherhub',
    user : 'root',
    password : 'Dhanu931@'
});
connection.connect(function(error){
    if(error) {
        throw error;
    }
    else{
        console.log('MySQL Database is connected Successfully');
    }
});
module.exports = connection;
 
3. Project Structure

WeatherHub
	Bin
	www
	node_modules
	node packages 		all nodepackage files
	public
	images 			all images
	javascripts 		all javascripts
	stylesheets 		all CSS files
	routes
	server java scripts 	 all server js
	views
	HTML files 		 all HTML files
	app.js
	databases.js
	package-lock.json
	package.json
		

4. Running the demo
1. run the web application:
Open terminal and navigate to      Run: npm start

Run this commands to for node packages and package.json
	npm init -y
	npm install  express-generator
	npm install node-fetch

2. Access the Application:
Open your browser and go to http://localhost:3000 port
Login:
For new user go to register page to register or 
----Use the dummy credentials: Username - admin, Password - admin.

4. Explore the
Navigate through the system to explore search based weather forecast, pinpointing based location forecast, etc.

5. Conclusion

This demonstration guide provides a detailed walkthrough of setting up and running the Weather Hub. Follow each step carefully to ensure a smooth experience. The Weather Hub project aims



---- TEAM Space360° ----
