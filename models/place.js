// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
var place = {
  all: function(cb) {
    orm.all("places_tbl", function(res) {
      cb(res);
    });
  }
  // ,
  // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("places", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("places", objColVals, condition, function(res) {
//       cb(res);
//     });
//   }
};
// Export the database functions for the controller (placesController.js).
module.exports = place;