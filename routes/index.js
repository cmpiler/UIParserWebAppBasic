var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("in index.js");
  //res.render('index', { title: 'CMPILERPROS UI Parser Demo' });
  /*content.body.form.input.onchange = function(e){
    console.log("file chosen");
  };*/
});

module.exports = router;