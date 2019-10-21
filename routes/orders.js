/*
 * All routes for orders are defined here
 * Since this file is loaded in server.js into api/orders,
 *   these routes are mounted onto /orders
 */

const express = require('express');
const ordersRoutes  = express.Router();

module.exports = function(dataHelpers) {

  ordersRoutes.get("/", function(req, res) {
    DataHelpers.getOrders((err, orders) => {
      if (err) {
        res.status(500).json({ error : err.message });
      } else {
        res.json(orders);
      }
    });
  });

  ordersRoutes.post("/", function(req, res) {
    if (!req.body.text) {
      res.status(400).json({ error: 'invalid request: no data in POST body'});
      return;
    }

    DataHelpers.saveOrder(order, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).send();
      }
    });
  });

  return ordersRoutes;
}
