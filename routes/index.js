
var express = require('express');
  var router = express.Router();
  var express = require('express');
  var router = express.Router();

var database = require('../database');


/* GET home page. */
router.get('/', function(request, response, next) {
  response.render('index', { title: 'Express', session : request.session });
});

router.get('/', function(request, response, next){
  response.redirect("/");
});

router.get('/welcome', function(request, response, next){
  response.render('welcome', { title: 'Express', session : request.session });
});
router.get('/features', function(request, response, next){
  response.render('features', { title: 'Express', session : request.session });
});
router.get('/about', function(request, response, next){
  response.render('about', { title: 'Express', session : request.session });
});
router.get('/registerabout', function(request, response, next){
  response.render('registerabout', { title: 'Express', session : request.session });
});
router.get('/map', function(request, response, next){
  response.render('map', { title: 'Express', session : request.session });
});
router.get('/presearchlocation', function(request, response, next){
  response.render('presearchlocation', { title: 'Express', session : request.session });

});

router.post('/login', function(request, response, next){

    var user_email_address = request.body.user_email_address;

    var user_password = request.body.user_password;

    if(user_email_address && user_password)
    {
        query = `
        SELECT * FROM users 
        WHERE email = "${user_email_address}"
        `;

        database.query(query, function(error, data){

            if(data.length > 0)
            {
                for(var count = 0; count < data.length; count++)
                {
                    if(data[count].password == user_password)
                    {
                      var username = data[count].username;
                      console.log('welcome', username)
                      request.session.username = data[count].username;
                      response.render('welcome', { username });
                      response.render('welcome', { session: request.session });
                      return;
                      //response.redirect("/");
                    }
                    else
                    {
                        response.send('Incorrect Password');
                    }
                }
            }
            else
            {
                response.send('Incorrect Email Address');
            }
            response.end();
        });
    }
    else
    {
        response.send("please enter email and password");
        response.end();
    }

});
router.get('/logout', function(request, response, next){

    request.session.destroy();

    response.redirect("/");

});

router.get('/searchlocation', function(request, response, next) {
  response.render('searchlocation', { title: 'Express', session : request.session });
});

router.get('/registration', function(request, response, next) {
  response.render('register', { title: 'Express', session : request.session });
});

router.get('/forecast.ejs', function(request, response, next) {
  response.render('forecast', { title: 'Express', session : request.session });
});
router.post('/register', function(request, response, next) {
    var username = request.body.user_name;
    var email = request.body.user_email_address;
    var password = request.body.user_password;
    console.log(username, email);
  
    if (username && email && password) {
      // Check if the email is already registered
      var query = `
        SELECT * FROM users
        WHERE email = "${email}"
      `;
  
      database.query(query, function(error, data) {
        if (data.length > 0) {
          response.send('Email already registered');
          response.end();
        } else {
          // Insert the new user into the database
          var insertQuery = `
            INSERT INTO users (username, email, password)
            VALUES ("${username}", "${email}", "${password}")
          `;
          console.log('sucess');
  
          database.query(insertQuery, function(error, result) {
            if (error) throw error;
            response.send('Registration successful. You can now log in.');
            response.end();
          });
        }
      });
    } else {
      response.send('Please fill in all the registration details.');
      response.end();
    }
  });

router.get('/temperature', async (request, response) => {
    const { lat, lng } = request.query;
  
    try {
      const OPENWEATHERMAP_API_KEY = '487e7565368442e72c2238a50b532484';
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${OPENWEATHERMAP_API_KEY}`);
      const data = await res.json();
  
      if (data.main && data.main.temp) {
        const temperature = Math.round(data.main.temp - 273.15);
        response.json({ temperature });
      } else {
        response.status(404).json({ error: 'Temperature data not found for given coordinates' });
      }
    } catch (error) {
      console.error('Error fetching weather data from OpenWeatherMap:', error);
      response.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router;

