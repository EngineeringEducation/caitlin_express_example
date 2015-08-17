var express = require('express');
var router = express.Router();
var request = require("request");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/run_thing', function(req, res, next) {
	var form = req.body;
	request.post('http://hubspot.com/whatever', {form:form})
  res.send('Hi Hi');
});


module.exports = router;
