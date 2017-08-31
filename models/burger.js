var orm = require("../config/orm.js");

var burgers = {

  all: function(cb){
    orm.selectAll("*", "burgers", function(res){
      cb(res);
    });//end orm.selectAll function
  },//end all function

  insert: function(tbl,tblCol,tblColVal,cb){
    orm.insertOne("burgers", "burger_name", tblColVal, function(re){
      cb(res);
    });//end orm.insertOne function
  },//end insert function

  update: function()

}//end burgers object

module.exports = burgers;
