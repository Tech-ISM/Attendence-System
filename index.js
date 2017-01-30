var express =require('express');
var path=require('path');
var exphbs=require('express-handlebars');
var bodyParser=require("body-parser");
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/student',function(){
	console.log('Database connected');
});
var app=express();

var index=require('./routes/student_routes');

app.set('views',path.join(__dirname,'views'));
app.engine('handlebars',exphbs({defaultLayout:'layout'}));
app.set('view engine','handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'public')));	

app.use(index);

app.set('port',4000);

app.listen(app.get('port'),function (req,res) {
	console.log('Server started')
	// body...
});

