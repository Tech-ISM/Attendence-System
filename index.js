var express =require('express');
var path=require('path');
var exphbs=require('express-handlebars');
var index=require('./routes/student_routes');
var app=express();
var mongoose=require('mongoose');
var bodyParser=require("body-parser");
//var express-validator=require('express-validator');

mongoose.connect('mongodb://localhost/student',function(){
	console.log('Database connected');
});
app.set('views',path.join(__dirname,'views'));
app.engine('handlebars',exphbs({defaultLayout:'layout'}));
app.set('view engine','handlebars');

app.use(bodyParser.json());


app.use(express.static(path.join(__dirname,'public')));	
app.use('/',index);
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port',4000);
app.listen(app.get('port'),function (req,res) {
	console.log('Server started')
	// body...
});

