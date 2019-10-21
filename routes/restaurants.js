/*
 * All routes for restaurants are defined here
 * Since this file is loaded in server.js into api/restaurants,
 *   these routes are mounted onto /restaurants
 */

const express = require('express');
const router  = express.Router();

module.exports = function(dataHelpers) {

  restaurantsRoutes.get("/", function(req, res) {
    dataHelpers.getRestaurants((err, restaurants) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(restaurants);
      }
    });
  });

  return restaurantsRoutes;

}
