//create and initialize dependecies
var express = require("express");
var burger = require("../models/burger.js");

//create router variable to hold the express.router function
var router = express.Router();

router.get("/", function(req, res){
  burger.all(function(data){
    //create object to hold the data from the .all function
    var indxObj = {
      burgers: data
    };
    //render that object to the index file
    res.render("index", data);
  }) //end burger.all function
}) //end get function

router.post("/", function(req, res){
  burger.insertOne([
    "burger_name", "devoured"
  ],[
    req.body.burger_name, req.body.devoured
  ]), function(){
    res.redirect("/");
  };
});

router.put("/:id", function(req, res){
  var condition = "id = " + req.params.id;

  console.log("Condition: " + condition);

  burger.updateOne("burger_name",
    req.body.burger_name, "devoured", req.body.devoured, condition
  ), function(){
    res.redirect("/");
  };
});

module.exports = router;
