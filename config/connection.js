//dependecies - require dotenv to store db login
//info in environment file
require("dotenv").config();
var mysql = require("mysql");

//create connection to mysql database
var connection = mysql.createConnection(){
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: proces.env.DB_PASS,
  database: "burgers_db"
};

connection.connect(function(err){
  if(err){
    console.log("Error: " + err);
  }

  console.log("Connected as ID: " + connection.threadId);
});

module.exports = connection;
