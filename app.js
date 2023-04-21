var express = require('express');
var app = express();
var index = require('./routes/index');
var users = require('./routes/users');
var tasks = require('./routes/tasks');
var db = require('./models/db')

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('public'));

// Connect DB
db.connect()


// Middleware parser
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//both index.js and things.js should be in same directory
app.use('/index', index);
app.use('/users', users);
app.use('/tasks', tasks);


app.get('/', function(req, res){
<<<<<<< HEAD
  res.render('signupPage');
=======
  res.render('homePage');
>>>>>>> 3a3a2680fae38cf4d45eef0ca1759f809f0cffdd
});


app.listen(3000, () => {
  console.log(`Example app listening on port http://localhost:3000`)
})