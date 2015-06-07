var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  // this is the /add/ route
  res.render('search');
});

router.get('/submit', function(req, res) {
  var models = require('../models/');
  var tags=req.query.tags.split(", ");

  Page.find({
    // $elemMatch matches array subdocuments
    // $in matches a set of possibilities
    tags: {$elemMatch: {$in: ['someTag', 'someOtherTag']}}
  });

  if(typeof tags !=='undefined'){
    res.send(products.filter(function(product){
      return product.category === category;//match category with the input category
    }));
  }else{
    req.send(products);
  }


  var url_name=generateUrlName(title);
  res.redirect('/url_name');
});

module.exports = router;
