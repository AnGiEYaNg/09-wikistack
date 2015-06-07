// Answer
var marked = require('marked')

module.exports = function(swig) {
  var page_link = function(page) {
    return "<a href='" + page.full_route + "'>" + page.title + "</a>"; 
  }

  page_link.safe = true;

  swig.setFilter('page_link', page_link)

  var markedFilter = function(text_body) {
    return marked(text_body)
  }

  markedFilter.safe = true;

  swig.setFilter("marked", markedFilter)

}
// // Setting custom filters on Swig
// var marked = require('marked');

// module.exports = function(swig) {
//   var page_link = function (doc) {
//     var link_name;
//     if (typeof doc.title !== "undefined" && doc.title !== "") {
//       link_name = doc.title
//     } else {
//       link_name = "Page "+doc.url_name;
//     }
//     return "<a href='"+doc.full_route+"'>"+link_name+"</a>";
//   };
//   page_link.safe = true;

//   swig.setFilter('page_link', page_link);

//   var markedFilter = function (body) {
//     return marked(body);
//   };
//     markedFilter.safe = true;
//     swig.setFilter('marked', markedFilter);

// };
