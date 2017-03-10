var express = require('express');
//1. Add path module
var path = require('path');

var router = express.Router();

var mongoose = require('mongoose');
var Beverages = require('../models/beverages.js');///replace students
var Categories = require('../models/categories.js');///replace students

/* 1. GET home page. */
router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/views', 'index.html'));
}); 
	
/*4. Need to research and write code to get student by id*/
router.get('/api/Beverage/:id', function(req, res, next) {
	Beverages.findById(req.params.id, function(err, beverage) {
		if(err) next(err);
		res.json(beverage);
	});
})
router.get('/api/Beverages/:id', function(req, res, next) {
	console.log(req.params.id);
	Beverages.find({category: req.params.id},function(err, beverages) {
	if(err) next(err);
	res.json(beverages);
});
})
/*2.Get HotBeverages*/
router.get('/api/Categories', function(req, res, next){
	Categories.find(function(err, categories){
		if(err) return next(err);
		res.json(categories);
		});
});

module.exports = router;
//58ab9898b30dcd18f2ae51dc
