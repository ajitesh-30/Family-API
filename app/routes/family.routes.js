
module.exports = (app) => {
	const family = require('../controllers/family.controllers.js');
	
	app.post('/register',family.register);
	app.get('/getall',family.findAll);
	app.get('/getinfo',family.findone);
}