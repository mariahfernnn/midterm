/*
 * All routes for orders are defined here
 * Since this file is loaded in server.js into api/orders,
 *   these routes are mounted onto /orders
 */

const express = require('express');
const ordersRoutes  = express.Router();
const queryFunction = require('../lib/query_functions');

module.exports = function(db) {
// Getting the orders for a particular restaurant
  ordersRoutes.get("/", function(req, res) {
    queryFunction.getRestaurantOrderInfo(db, 'Oretta')
    .then(rows => {
      console.log("ORDER FUNCTION");
      return res.json(rows);
    })
  });

// Saving an order for a particular restaurant and order
  ordersRoutes.post("/", function(req, res) {
    queryFunction.addOrderForAny(db, req.body.totalAmount, 1, 1)
    .then(rows => {
      console.log("TESTING THE ORDERS.JS");
      // res.send(restaurant);
      res.json({status: 'ok'})
    })
    console.log(req.body);
  });

// Send an SMS when a customer places an order


  return ordersRoutes;
}
