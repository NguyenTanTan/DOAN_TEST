var express = require('express');
var app = express();
var index = require('./routes/index');
var users = require('./routes/users');
var tasks = require('./routes/tasks');

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('public'));


//both index.js and things.js should be in same directory
app.use('/index', index);
app.use('/users', users);
app.use('/tasks', tasks);


app.get('/', function(req, res){
  res.render('addTask');
});


app.listen(3000, () => {
  console.log(`Example app listening on port http://localhost:3000`)
})