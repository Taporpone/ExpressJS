var express = require('express');
var app = express();


app.use('/store', function(req,res,next){
  console.log('Middleware req -> /store');
  next();
});

app.get('/',function(req,res) {
  res.send('Hello!');
  res.end();
});

app.get('/store',function(req,res){
  res.send('Store');
  res.end();
});

var server = app.listen(3000);

app.use(function(req,res,next){
  res.status(404).send('Not found');
});
