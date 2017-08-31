//require our exported mysql connection
var connect = require("./connection.js");


//intialize orm object to hold our db queries
//each function within the object will pass a param of cb,
//which operates as our callback that we will pass our query
//result to as it's own argument
var orm = {
  /*
    selectAll function accepts one param and queries
    your mysql database to return all values within the
    given table of that db

    @param table = the name of the table within the database
      that the user wishes to return
  */

  selectAll: function(type, table, cb){
    var queryStr = "SELECT ?? FROM ??";
    connect.query(queryStr,
    [type, table],
    function(err, data){
      if(err) throw err;

      cb(data);
    }) // end db query
  },//end selectAll function

  /*
    insertOne function accepts three params
    and queries your mysql db, inserting one value
    into a given database and table

    @param table = the name of the table within the database
    @param tableCol = the column within the table param that was passed
    @param tableColVal = the value that you want to insert into the column
      specified by the tableCol param
  */

  insertOne: function(table, tableCol, tableColVal, cb){
    var queryStr = "INSERT INTO ?? (??) VALUES (?)";
    connect.query(queryStr,
    [table, tableCol, tableColVal],
    function(err, data){
      if(err) throw err;

      cb(data);
    }); //end query to the db
  }, //end insertOne function

  /*
    updateOne function accepts 4 params and uses those arguments
    to update one of the values on your mysql database.

    @param table = the name of the table that you will use within your database
    @param tableCol = the column of the table that houses the value you want to change
    @param tableColVal = the value with which you will use to update the column
    @param condition = the condition specifies how the query will choose the column
      that you wish to update
  */

  updateOne: function(table, tableCol, tableColVal, condition, cb){
    var queryStr = "UPDATE ?? SET ?? = ? WHERE ??";
    connect.queryStr(queryStr,
      [table, tableCol, tableColVal, condition],
      function(err, data){
          if (err) throw err;

          cb(data);
      }); //end query to db
};//end orm object of functions


//export the object to use in our models file
module.exports = orm;
