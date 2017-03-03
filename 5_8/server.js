var express = require('express');
var stormpath = require('express-stormpath');
var app = express();

app.set('views','./views');
app.set('view engine','pug');

app.use(stormpath.init(app, {
  expand: {
    customData: true
  }
}));
app.use('/profile', stormpath.loginRequired, require('./profile')());

app.get('/',stormpath.getUser, function(req,res){
  res.render('home', {
    title: 'Welcome'
  });
});

app.on('stormpath.ready',function(){
  console.log('stormpath ready!');
});

app.listen(3000);
