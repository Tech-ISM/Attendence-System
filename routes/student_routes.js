var express=require('express');
var router =express.Router();

var Student=require('../models/student_models.js');

router.post('/register',function (req,res) {
	var id =req.body.id;
	var roll_num=req.body.roll_num;
	var name=req.body.name;

	var newStudent=new Student();

	newStudent.id=id;
	newStudent.roll_num=roll_num;
	newStudent.name=name;

	newStudent.save(newStudent,function(errors,student){
		if (errors) {
			res.send('Error saving new student data');
		}else{
			console.log(student);
		}
	});
	res.redirect('/login');
});


router.get('/login',function (req,res) {
	res.render('login');
});


router.get('/register',function (req,res) {
	res.render('index');
});

module.exports=router;