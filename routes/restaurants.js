/*
 * All routes for restaurants are defined here
 * Since this file is loaded in server.js into api/restaurants,
 *   these routes are mounted onto /restaurants
 */

 // NOTE: UPDATE server.js AS WELL

const express = require('express');
const router  = express.Router();

module.exports = function(DataHelpers) {

  restaurantsRoutes.get("/", function(req, res) {
    DataHelpers.getRestaurants((err, restaurants) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(restaurants);
      }
    });
  });

  return restaurantsRoutes;

}
