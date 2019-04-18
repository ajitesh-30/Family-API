const family = require('../models/family.model.js');

exports.findAll =(req,res)=>{
	Family.find()
	.then(family=>{
		res.send(family);
	}).catch(err => {
		res.status(500).send({
			message: err.message||'Coudln\'t retrive data'
		});
	});
};
exports.register = (req,res)=>{
	if(!req.body.content){
		return res.status(400).send({
			message:"Enter proper family details"
		});
	}

	const family_data = new Family({
		emailAddr :req.body.emailAddr,
		password : req.body.password,
		name : req.body.name,
		age : req.body.age,
		height : req.body.height,
		position : req.body.position
	});
	family_data.save().
	then(data => {
			res.send(data);
		}).catch(err => {
			res.status(500).send({
				message: err.message||"Some Error Occurred"
			});
		});
	};


exports.findone = (req,res)=>{
	var emailAddr = req.param('emailAddr');
	var password = req.param('password');
	var targetPerson = req.param('targetPerson');
	family.find({
		'emailAddr':emailAddr,
		'password':password,
		'position':targetPerson
	})
	.then(family=>{
		if(!family){
			return res.status(404).send({
				message : "No such member in the family"
			});
		}
		res.send(family);
	}).cathc(err=>{
		if(err.kind === 'ObjectId'){
			return res.status(404).send({
				message : "No such member in the family"
			});
		}
		return res.status(500).send({
			message : "Error retrieving data of member"
		});
	});
};
