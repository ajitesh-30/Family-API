const Family = require('../models/family.model.js');
exports.findAll = (req,res)=>{
	Family.find()
	.then(family=>{
		res.send(family);
	}).catch(err => {
		res.status(500).send({
			message: err.message||'Coudln\'t retrive data'
		});
	});
};

exports.register = async (req,res)=>{
	const family_data = new Family({
		emailAddr :req.body.emailAddr,
		password : req.body.password,
		name : req.body.name,
		age : req.body.age,
		height : req.body.height,
		position : req.body.position,
		fatherEmailAddr : req.body.fatherEmailAddr,
		motherEmailAddr : req.body.motherEmailAddr,
		sonEmailAddr : sonEmailAddr
	});
	/*
	let member = await Family.findOne({email: req.body.emailAddr});
	if (member) {
		return res.status(400).send("User already registered");
	};*/
	family_data.save().
	then(data => {
			res.send(data);
		}).catch(err => {
			res.status(500).send({
				message: err.message||"Some Error Occurred"
			});
		});
	};

exports.findone = async (req,res)=>{
	let user = await User.findOne({ email: req.body.email});
	if(user) // User exists then
	{
	 	if(user.password === req.body.password)
	 	{
	  		var target = req.body.targetperson;
	  		if(user.position === 'father')
		  	{
		  		if(target==='mother')
		  		{
		    	  let user2=await User.findOne({ email: user.motheremail});
		  		}
		  		if(target === 'son')
		  		{
		    	  let user2=await User.findOne({ email: user.sonemail});
		  		}
		  		if(target==='daughter')
		  		{
		    	  let user2=await User.findOne({ email: user.daughteremail});
		  		}
		  		if(target==='father')
		  		{
		    	  let user2=user;
		  		}
		  	}
			else if(user.position==='mother')
		  	{
		  		if(target==='son')
		  		{
		  			let user2=await User.findOne({ email: user.sonemail});
		      	}
		      	if(user.position==='mother'&& target==='daughter')
		  		{
		     	 	let user2=await User.findOne({ email: user.daughteremail});
		 		}
		 		else if(user.position==='mother'&& target==='mother')
		  		{
		      		let user2=user;
		  		}
		  	}
		  	else if(user.position==='son')
		  	{
		  		if(target==='daughter')
		  		{
		  			let user2=user;	
		  		}
		      	else if(user.position=='son'&& target=='daughter')
		  		{
		     		 let user2=await User.findOne({ email: user.daugtheremail});
		  		}

		  		else
		  		{
		  			res.status(404).send({
		  				message : 'You are not authorized to view this person'
		  			});
		  		}
		  	}
		  	else if(user.position=='daughter')
		  	{
		  		if(target=='daughter')
		  		{
		  			let user2=user;	
		  		}
		    	else if(target=='son')
		  		{	
		    	  let user2=await User.findOne({ email: user.sonemail});
		  		}
		  			
		  		else
		  		{
		  			res.status(404).send({
		  				message : 'You are not authorized to view this person'
		  			});
		  		}  	
		  	}
			res.send(user2);
		}
		else
		{
		 	return res.status(404).send({
					message : "Wrong Password"
				});
		 }
	}
	else
	{
		return res.status(404).send({
				message : "Wrong Email"
			});
	}
};
