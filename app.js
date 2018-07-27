var express = require("express");
var ejs = require("ejs");
var app = express();
app.get(function(req,res){
	res.render("index.ejs");
});
app.listen(3600,function(){
	console.log("Server Started");
});