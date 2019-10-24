// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();
const queryFunctions = require('./lib/query_functions');
const morgan = require('morgan');
const cookieSession = require('cookie-session')

app.use(cookieSession({
  name: 'session',
  keys: ["POTATO"],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));


const data = require('./data');

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
// const restaurantsRoutes = require("./routes/restaurants.js");
const ordersRoutes = require("./routes/orders.js");
// const menusRoutes = require("./routes/menus.js")


// Mount all resource routes
// Added the restaurantsRoutes
// Added the ordersRoutes
// app.use("/api/restaurants", restaurantsRoutes(db));
app.use("/api/orders", ordersRoutes(db));
// app.use("/api/menus", menusRoutes(db));
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
    // console.log("TESTSTESTS")
    // console.log(queryFunctions);
    queryFunctions.getRestaurants(db).then( restaurants => {
      queryFunctions.getMenuItems(db).then( menuItems => {
        const menus = menuItems.reduce((acc, item) => {


          console.log(item)
          console.log('acc--->',acc[item.restaurant_id])
          return {
            ...acc,
            [item.restaurant_id]: acc[item.restaurant_id] ?
            [ ...acc[item.restaurant_id], item] : [item],
          }
        },
        {})

        console.log("MENU");
        console.log(menus)


        res.render("index", { restaurants, menus });
      });
    })
  }
})
//this is for owner side
app.get("/orders", (req, res) => {
  // SELECT * FROM order_items, JOIN ON menu_items order_items.menu_item_id = menu_items.id
  // WHERE order.id = ${req.params.id}

  //trigger twillio
  res.render('resOwners')
});

//This is for user side
app.get("/orders/:id", (req, res) => {
  // SELECT * FROM order_items, JOIN ON menu_items order_items.menu_item_id = menu_items.id
  // WHERE order.id = ${req.params.id}
  res.render('restaurants')

})

app.post('/login', (req, res) => {
  // auth stuff res.sessions = ...
  res.redirect('/orders');
});


app.get("/login", (req, res) => {
  res.render('login')
})

app.post('/login', (req, res) => {
  req.session.user_id = '1';
  res.redirect('/orders');
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
