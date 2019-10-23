/*
 * All routes for restaurants are defined here
 * Since this file is loaded in server.js into api/restaurants,
 *   these routes are mounted onto /restaurants
 */

const express = require('express');
const restaurantsRoutes  = express.Router();
const queryFunction = require('../lib/query_functions');


module.exports = function(db) {


  // restaurantsRoutes.get("/", function(req, res) {
  //   queryFunction.getAllMenuItems(db)
  //   .then(rows => {
  //     console.log(res.json(rows))
  //     return res.json(rows);
  //   })
  // });

  restaurantsRoutes.get("/", function(req, res) {
    queryFunction.getRestaurantNames(db)
    .then(rows => {
      return res.json(rows);
    })
  });
  return restaurantsRoutes;

}
