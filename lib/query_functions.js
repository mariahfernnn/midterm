// Get the restaurant info for a particular restaurant
const getRestaurantInfo = function (db, restaurantName, limit) {
  console.log("REALLLY");
  return db.query(`SELECT restaurants.name
  FROM restaurants WHERE restaurants.name = '${restaurantName}';`)
  .then(res => {
    return res.rows;
  })
  .catch(err => {
    throw err;
  })
}
module.exports.getRestaurantInfo = getRestaurantInfo;
// Get the restaurant info for a particular cuisine
const getCuisineRestaurantInfo = function (db, cuisineName, limit) {
  return db.query(`SELECT restaurants.name, restaurants.street_address, restaurants.city , restaurants.province , restaurants.post_code , restaurants.country , restaurants.cuisine
  FROM restaurants WHERE restaurants.cuisine = '${cuisineName}';`, [limit])
  .then(res => {
    return res.rows;
  })
  .catch(err => {
    throw err;
  })
}
module.exports.getCuisineRestaurantInfo = getCuisineRestaurantInfo;

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
