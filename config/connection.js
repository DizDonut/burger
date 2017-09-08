//dependecies - require dotenv to store db login
//info in environment file
require("dotenv").config();
var mysql = require("mysql");

//create connection to mysql database
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "burgers_db"
});

var newConnect;

function handleDisconnect(){
  newConnect = mysql.createConnection(connection);

  newConnect.connect(function(err){
    if(err){
      console.log("Error: " + err);
      setTimeout(handleDisconnect, 2000);
      return;
    }
    console.log("Connected as ID: " + connection.threadId);
  });

  newConnect.on("error", function(err){
    console.log("DB Error: ", err);
    if(err.code === "PROTOCOL_CONNECTION_LOST"){
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

module.exports = handleDisconnect;
