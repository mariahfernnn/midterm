// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();
const morgan = require('morgan');

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));


// Added the restaurantsRoutes
// Added the ordersRoutes
const restaurantsRoutes = require("./routes/restaurants.js");
const ordersRoutes = require("./routes/orders.js");
const menusRoutes = require("./routes/menus.js")


// Mount all resource routes
// Added the restaurantsRoutes
// Added the ordersRoutes
app.use("/api/restaurants", restaurantsRoutes(db));
app.use("/api/orders", ordersRoutes(db));
app.use("/api/menus", menusRoutes(db));
// Note: mount other resources here, using the same pattern above


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  if (res.session && res.session.user_id) {
    const menuItems = [];
    // const menuItems = await getMenuItemsForOwner(res.session.user_id);
    res.render("orders", { menuItems: menuItems });
  } else {
    const restaurants = await queryFunctions.getRestaurants();
    const menuItems = await queryFunctions.getMenuItems();
    const menus = menuItems.reduce((acc, item) => {
      return {
        ...acc,
        [item.restaurantId]: [
          ...acc[item.restaurantId],
          item,
        ]
      }
    },
    {})
    res.render("index", { restaurants, menus });
  }
});

app.post('/login', (req, res) => {
  // auth stuff res.sessions = ...
  res.redirect('/orders');
});

// Todo
// - implement authentication (copy over from tinyapp)
// - Add login link maybe using modal on index.ejs that redirects to /orders
// - build restaurant view


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
