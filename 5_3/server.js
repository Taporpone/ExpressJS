var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var fileContent;

app.use(bodyParser.json());

app.get('/getNote', function(req,res){
  fs.readFile('./test.json','utf-8', function(err,data){
    if (err) throw err;
    fileContent = data;
    res.send(data);
    res.end();
  })
});

app.post('/updateNote/:note', function(req,res){
  fileContent += req.params.note;
  fs.writeFile('./test.json',fileContent, function(err){
    if (err) throw err;
    console.log('File updated!');
  })
  res.end();
});



var server = app.listen(3000);
