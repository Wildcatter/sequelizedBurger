var express = require('express');
var router = express.Router();
var models = require('../models');

//get route -> index
router.get('/', function(req,res) {
		res.redirect('/burgers')
});

router.get('/burgers', function(req,res) {
	models.burger.findAll({}).then(function(burger_data){
		res.render('index', {burger_data: burger_data});
	});
});


router.post('/burgers/create', function(req, res) {
	models.burger.create({
		burger_name:req.body.burger_name
	}).then(function(result){
		console.log(result);
		res.redirect('/');
	});
});


router.put('/burgers/update', function(req,res){
	models.burger.update(
	{
		devoured: true
	}, 
	{
		where: {id: req.body.burger_id}	
	})
	.then(function(result){
		console.log(result);
		res.redirect('/');
	});
});

module.exports = router;
