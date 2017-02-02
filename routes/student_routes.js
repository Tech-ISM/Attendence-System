var express=require('express');
var router =express.Router();
//var fs = require('fs');
var path = require('path');
var multer = require('multer');

var storage =   multer.diskStorage({  
  destination: function (req, file, callback) {  
    callback(null, './uploads/images');  
  },  
  filename: function (req, file, callback) {  
    callback(null, file.originalname);  
  }  
});  

var upload = multer({ storage : storage}).single('image');

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
	upload(req,res,function(err) {  
        if(err) {  
            return res.end("Error uploading file.");  
        }  
        res.end("File is uploaded successfully!");  
    });   
	
	res.redirect('/login');
});


/*
router.get('/image.jpeg',function(req,res){
	res.sendFile('../uploads/images/image.jpg');
});*/

router.get('/login',function (req,res) {
	res.render('login');
});


router.use('/register',express.static(path.join(__dirname,'../public/index.html')));

module.exports=router;