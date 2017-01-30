var mongoose =require('mongoose');

var StudentSchema=mongoose.Schema({
	id:{
		type:Number,
		index:true
	},
	roll_num:{
		type:String
		
	},
	name:{
		type:String
	}
	/*image:{
		type:String,
		data:Buffer
	},
	count:{
		type:Number
	}*/
}); 

module.exports=mongoose.model('student',StudentSchema);
