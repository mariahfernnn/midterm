/*
 * All routes for menus are defined here
 * Since this file is loaded in server.js into api/restaurants,
 *   these routes are mounted onto /menus
 */

const express = require('express');
const menusRoutes  = express.Router();
const queryFunction = require('../lib/query_functions');


module.exports = function(db) {


  menusRoutes.get("/", async function(req, res) {
    const menu1 = await queryFunction.getMenuForRestaurant(db, 1);
    const menu2 = await queryFunction.getMenuForRestaurant(db, 2);
    const menu3 = await queryFunction.getMenuForRestaurant(db, 3);
    const result = {
      menu1: menu1,
      menu2: menu2,
      menu3: menu3
    }
    return res.json(JSON.stringify(result));
  });

  // menusRoutes.get("/", function(req, res) {
  //   queryFunction.getMenuForRestaurant2(db)
  //   .then(rows => {
  //     console.log("XXXXXX")
  //     return res.json(rows);
  //   })
  // });

  // menusRoutes.get("/", function(req, res) {
  //   queryFunction.getMenuForRestaurant3(db)
  //   .then(rows => {
  //     return res.json(rows);
  //   })
  // });

  return menusRoutes;

}
