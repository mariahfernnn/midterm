/*
 * All routes for orders are defined here
 * Since this file is loaded in server.js into api/orders,
 *   these routes are mounted onto /orders
 */

 // NOTE: UPDATE server.js AS WELL

const express = require('express');
const router  = express.Router();

module.exports = function(DataHelpers) {

  ordersRoutes.get("/", function(req, res) {
    DataHelpers.getOrders((err, orders) => {
      if (err) {
        res.status(500).json({ error : err.message });
      } else {
        res.json(orders);
      }
    });
  });
}
