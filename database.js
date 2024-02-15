const mysql = require('mysql');

const connection = mysql.createConnection({
	host : 'localhost',
	database : 'weatherhub',
	user : 'root',
	password : 'Dhanu931@'
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;
