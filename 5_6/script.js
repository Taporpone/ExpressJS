var express = require('express');
var app = express();

app.set('view engine','pug');
app.set('views','./views')

app.get('/',function(req,res) {
  res.render('index');
  res.end();
});
app.get('/logged_in',function(req,res){
  res.render('logged_in');
  res.end();
})

var server = app.listen(3000);

app.use(function(req,res,next){
  res.status(404).send('Not found');
});
