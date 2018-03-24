var express = require("express");
var router = express.Router();
var place = require("../models/place.js");

router.get("/", function(req, res) {
  place.all(function(data) {
    var hbsObject = {
      places_tbl: data
    };
    console.log('this is the hbsObject', hbsObject);
    res.render("index", hbsObject );
  });
});

// router.get("/burgers", function(req, res) {
//   // express callback response by calling burger.selectAllBurger
//   burger.all(function(burgerData) {
//     // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
//     res.render("index", { burger_data: burgerData });
//   });
// });


module.exports = router;