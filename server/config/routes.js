var path = require('path');
var users = require('../controllers/users.js')//we can get functions from friends
var polls = require('../controllers/polls.js')//we can get functions from friends

module.exports = function(app){
	app.get('/', function(req, res) {
   		users.index(req,res)
    
	});

	app.post('/user', function(req, res){
		users.create(req, res);
	});

	app.get('/poll', function(req, res){
		polls.show(req, res);
	});
	
	// app.post('/poll', function(req, res){
	// 	polls.create(req, res);
	// });

	app.post('/poll/:id', function(req, res){
		polls.create(req, res);
	});

	app.get('/poll/:id', function(req, res){
		polls.showone(req, res);
	});

	app.put('/poll/update/:id', function(req, res){
		
		polls.update(req, res);
	});

}