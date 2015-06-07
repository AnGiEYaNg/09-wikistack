var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  // this is the /add/ route
  res.render('add');
});

router.post('/submit', function(req, res) {
  var tags=req.body.tags
  .split(',')
  .map(function(s){return s.trim()})

  delete req.body.tags

  var page=new models.Page(req.body);
  
  tag.forEach(function(t){
    page.tags.addToSet(t)
  })

  page.save()
  .then(function(page){
    res.redirect('/');
  })

  models.Page
  .create(req.body)
  .then(function(page){
    res.redirect('/')
  })

 //  var models = require('../models/');

 //  // STUDENT ASSIGNMENT:
 //  // add definitions of the `title`, `body` and `url_name` variables here
 //  var title=req.body.title;
 //  var body=req.body.body_text;
 //  var tags=req.body.tags.split(", ");

	// var generateUrlName = function(name) {
	//   if (typeof name != "undefined" && name !== "") {
	//     // Removes all non-alphanumeric characters from name
	//     // And make spaces underscore
	//     return name.replace(/\s/ig, '_').replace(/\W/ig,'');
	//   } else {
	//     // Generates random 5 letter string
	//     return Math.random().toString(36).substring(2,7);
	//   }
	// };

 //  var url_name=generateUrlName(title);

 //  var page = new models.Page({ 'title': title, 'body': body, 'url_name': url_name, 'tags':tags });
 //  page.save();
  res.redirect('/');
});

module.exports = router;
