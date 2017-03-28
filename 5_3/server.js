var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var fileContent = '';

fs.stat('./test.json', function (err) {
  if (err) {
    fs.writeFile('./test.json', '', function (err) {
      if (err) {
        console.log('I couldn\'t create json file. Error: ' + err)
      }
    });
  }
});

app.use(bodyParser.json());

app.get('/getNote', function (req, res) {
  fs.readFile('./test.json', 'utf-8', function (err, data) {
    if (err) {
      console.log(err);
      res.status(500).send('Error reading json file :(');
    } else {
      fileContent = data;
      res.send(data);
    }
    res.end();
  })
});

app.post('/updateNote/:note', function (req, res) {
  fileContent += req.params.note;
  fs.writeFile('./test.json', fileContent, function (err) {
    if (err) {
      console.log(err);
      res.status(500).send('Error writing to json file :(');
      res.end();
    } else {
      console.log('File updated!');
    }
  })
});



var server = app.listen(3000);
