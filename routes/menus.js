/*
 * All routes for menus are defined here
 * Since this file is loaded in server.js into api/restaurants,
 *   these routes are mounted onto /menus
 */

const express = require('express');
const menusRoutes  = express.Router();
const queryFunction = require('../lib/query_functions');


module.exports = function(db) {


  menusRoutes.get("/", function(req, res) {
    queryFunction.getMenuForRestaurant1(db)
    .then(rows => {
      console.log(res.json(rows))
      return res.json(rows);
    })
  });

  menusRoutes.get("/", function(req, res) {
    queryFunction.getMenuForRestaurant2(db)
    .then(rows => {
      console.log(res.json(rows))
      return res.json(rows);
    })
  });

  menusRoutes.get("/", function(req, res) {
    queryFunction.getMenuForRestaurant3(db)
    .then(rows => {
      console.log(res.json(rows))
      return res.json(rows);
    })
  });

  return menusRoutes;

}
