const mongoose = require('mongoose');

const FamilySchema = mongoose.Schema({
	emailAddr: String,
	password: String,
	name: String,
	age: { type: Number},
	height: { type: Number},
	position: {type: String,required : true},
	fatherEmailAddr : {type: String,default : null},
	motherEmailAddr : {type: String,default : null},
	sonEmailAddr : {type: String,default : null}
});

module.exports = mongoose.model('Family',FamilySchema);