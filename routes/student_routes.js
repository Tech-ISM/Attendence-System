var express=require('express');
var router =express.Router();

var Student=require('../models/student_models.js');

router.post('/register',function (req,res) {
	var id =req.body.id;
	var roll_num=req.body.roll_num;
	var name=req.body.name;
	
	//req.checkBody('id','ID is Required ').notEmpty();	
/*	var errors =req.validationErrors();

	if (errors) {
		res.render('index',{errors:errors});
	}
	else
	{	
*/
		/*var newStudent = new Student({
			id:id,
			roll_num:roll_num,
			name:name
		});
*/	
		var newStudent=new Student();

		newStudent.id=id;
		newStudent.roll_num=roll_num;
		newStudent.name=name;

		newStudent.save(function(errors,student){
			if (errors) {
				res.send('Error saving new student data');
			}
			else{
				console.log(errors);
			}

		});
	//	res.redirect('/login')
/*	}
*/
	// body...
});


router.get('/login',function (req,res) {
	// body...

	res.render('login');
});


router.get('/',function (req,res) {
	// body...

	res.render('index');
});

module.exports=router;