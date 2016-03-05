var Express = require('express');

var app = new Express();

app.get('/',function(req,res){
  res.render('./../app/index.ejs',{})
})
.use(Express.static(__dirname+'/../.tmp'))
.listen(7777);
