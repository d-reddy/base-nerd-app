var Express = require('express');

var app = new Express();

var router = Express.Router();

router.get('/', function(req,res){
  res.render('./../app/index.ejs',{})
});

app.use('/', router)
   .use(Express.static(__dirname+'/../.tmp'))
   .listen(7777);
