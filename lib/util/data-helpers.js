"use strict";

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'appName'
});

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

module.exports = function makeDataHelpers(db) {
  return {
    // NOTE: MODIFY THIS FUNCTION WHEN RESTAURANTS TABLE IN THE DB HAS BEEN FINALIZED
    // Define helper functions for getting restaurants, using the database `db`
    getRestaurants: function(callback) {
      simulateDelay(() => {
        const sortAlphabetically = (a, b) => a.created_at = b.created_at;
        callback(null, db.restaurants.sort(sortAlphabetically));
      });
    },

    // NOTE: MODIFY THIS FUNCTION WHEN ORDERS TABLE IN THE DB HAS BEEN FINALIZED
    // Define helper functions for saving and getting customer orders, using the database `db`
    getOrders: function(callback) {
      simulateDelay(() => {
          const sortNewestFirst = (a, b) => a.created_at - b.created_at;
          callback(null, db.orders.sort(sortNewestFirst));
      });
    },

    // Saves an order to `db`
    saveOrder: function(newOrder, callback) {
      simulateDelay(() => {
        db.orders.push(newOrder);
        callback(null,true);
      });
    }

    // Get the restaurant info
    const getRestaurantInfo = function (restaurantName, limit) {
      return pool.query(`SELECT restaurants.name, restaurants.street_address, restaurants.city , restaurants.province , restaurants.post_code , restaurants.country , restaurants.cuisine
      FROM restaurants WHERE restaurants.name = $;`, [limit])
    }

  }

}

