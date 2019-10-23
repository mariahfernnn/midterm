// Gets the restaurant name for all restaurants for the homepage. This is used in restaurants.js
const getRestaurantNames = function (db) {
  return db.query(`SELECT name FROM restaurants;`)
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      throw err;
    })
}
module.exports.getRestaurantNames = getRestaurantNames;

// Gets the menu items for all the restaurant1 for the homepage. This is used in restaurants.js along with the restaurants get request
const getMenuForRestaurant1 = function (db) {
  return db.query(`SELECT name, description, price FROM menu_items WHERE restaurant_id = 1 ORDER BY name;`)
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      throw err;
    })
}
module.exports.getMenuForRestaurant1 = getMenuForRestaurant1;

// Gets the menu items for all the restaurant2 for the homepage. This is used in restaurants.js along with the restaurants get request
const getMenuForRestaurant2 = function (db) {
  return db.query(`SELECT name, description, price FROM menu_items WHERE restaurant_id = 2 ORDER BY name;`)
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      throw err;
    })
}
module.exports.getMenuForRestaurant2 = getMenuForRestaurant2;

// Gets the menu items for all the restaurant3 for the homepage. This is used in restaurants.js along with the restaurants get request
const getMenuForRestaurant3 = function (db) {
  return db.query(`SELECT name, description, price FROM menu_items WHERE restaurant_id = 3 ORDER BY name;`)
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      throw err;
    })
}
module.exports.getMenuForRestaurant3 = getMenuForRestaurant3;



// Get the restaurant info for a particular restaurant
const getRestaurantInfo = function (db, restaurantName) {
  console.log("REALLLY");
  return db.query(`SELECT * FROM restaurants WHERE restaurants.name = '${restaurantName}';`)
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      throw err;
    })
}
module.exports.getRestaurantInfo = getRestaurantInfo;
// Get the restaurant info for a particular cuisine
// const getCuisineRestaurantInfo = function (db, cuisineName, limit) {
//   return db.query(`SELECT restaurants.name, restaurants.street_address, restaurants.city , restaurants.province , restaurants.post_code , restaurants.country , restaurants.cuisine
//   FROM restaurants WHERE restaurants.cuisine = '${cuisineName}';`, [limit])
//   .then(res => {
//     return res.rows;
//   })
//   .catch(err => {
//     throw err;
//   })
// }
// module.exports.getCuisineRestaurantInfo = getCuisineRestaurantInfo;

const getRestaurantOrderInfo = function (db, restaurantNameOfOrder) {
  return db.query(`SELECT orders.date_time_ordered_created, orders.order_is_complete, orders.total_amount, restaurants.name, users.name
  FROM orders
  JOIN restaurants ON restaurants.id = orders.restaurant_id
  JOIN users ON users.id = orders.user_id
  WHERE restaurants.name = '${restaurantNameOfOrder}';`)
    .then(res => {
      console.log("CHECKING AGAIN")
      return res.rows;
    })
    .catch(err => {
      throw err;
    })
}
module.exports.getRestaurantOrderInfo = getRestaurantOrderInfo;
// USING PROMISES
// const addOrderForRestaurant = function (db, obj) {
//   // GETS THE RESTAURANT ID FOR THE PARTICULAR RESTAURANT
//   let restaurantIdForOrder;
//   return db.query(`SELECT id FROM restaurants WHERE name = '${obj.restaurantName}'`)
//   .then(res => {
//     console.log("ID ---->", res.rows[0].id)
//     restaurantIdForOrder = res.rows[0].id;
//     return db.query(`SELECT id FROM users WHERE name = '${obj.userName}'`)
//   })
//   .then(result => {
//       console.log("USERNAME ------->", result.rows[0].idc);
//       const userIdForOrder = result.rows[0].id;
//       // INSERTS DATA INTO ORDERS FORM
//       db.query(`INSERT INTO orders (date_time_ordered_created, total_amount, restaurant_id, user_id)
//     VALUES (CURRENT_TIMESTAMP, ${obj.totalAmount}, '${restaurantIdForOrder}', '${userIdForOrder}');`)
//     })
//   .catch(err => {
//     throw err;
//   });
// }

// GETS THE RESTAURANT ID FOR THE PARTICULAR RESTAURANT
const addOrderForRestaurant = async function (db, obj) {
  try {
    const idRes = await db.query(`SELECT id FROM restaurants WHERE name = '${obj.restaurantName}'`);
    const restaurantIdForOrder = idRes.rows[0].id;
    const idUsr = await db.query(`SELECT id FROM users WHERE name = '${obj.userName}'`);
    const userIdForOrder = idUsr.rows[0].id;
    const idOrd = await db.query(`INSERT INTO orders (date_time_ordered_created, total_amount, restaurant_id, user_id)
    VALUES (CURRENT_TIMESTAMP, ${obj.totalAmount}, '${restaurantIdForOrder}', '${userIdForOrder}');`);
  } catch (err) {
    console.error(err);
  }
}
module.exports.addOrderForRestaurant = addOrderForRestaurant;


const getUserOrderInfo = function (userNameOfOrder, limit) {
  return pool.query(`SELECT orders.date_time_ordered_created, orders.order_is_complete, orders.total_amount, restaurants.name, users.name
  FROM orders
  JOIN restaurants ON restaurants.id = orders.restaurant_id
  JOIN users ON users.id = orders.user_id
  WHERE restaurants.name = $1 AND users.name = $2;`, [limit])
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      throw err;
    })
}
