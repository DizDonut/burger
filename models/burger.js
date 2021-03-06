var orm = require("../config/orm.js");

var burgers = {

  all: function(cb){
    orm.selectAll("*", "burgers", function(res){
      cb(res);
    });//end orm.selectAll function
  },//end all function

  insert: function(tblColVal,cb){
    orm.insertOne(tblColVal, function(res){
      cb(res);
    });//end orm.insertOne function
  },//end insert function

  update: function(tblCol, tblColVal, condition, cb){
    orm.updateOne("burgers", tblCol, tblColVal, condition, function(res){
      cb(res);
    });//end orm.updateone function
  }//end update function

}//end burgers object

module.exports = burgers;
