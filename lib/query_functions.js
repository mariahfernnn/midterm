const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'appName'
});

// Get the restaurant info for a particular restaurant
const getRestaurantInfo = function (restaurantName, limit) {
  return pool.query(`SELECT restaurants.name, restaurants.street_address, restaurants.city , restaurants.province , restaurants.post_code , restaurants.country , restaurants.cuisine
  FROM restaurants WHERE restaurants.name = $;`, [limit])
  .then(res => {
    return res.rows;
  })
  .catch(err => {
    throw err;
  })
}
// Get the restaurant info for a particular cuisine
const getCuisineRestaurantInfo = function (cuisineName, limit) {
  return pool.query(`SELECT restaurants.name, restaurants.street_address, restaurants.city , restaurants.province , restaurants.post_code , restaurants.country , restaurants.cuisine
  FROM restaurants WHERE restaurants.cuisine LIKE $;`, [limit])
  .then(res => {
    return res.rows;
  })
  .catch(err => {
    throw err;
  })
}

const getRestaurantOrderInfo = function (restaurantNameOfOrder, limit) {
  return pool.query(`SELECT orders.date_time_ordered_created, orders.order_is_complete, orders.total_amount, restaurants.name, users.name
  FROM orders
  JOIN restaurants ON restaurants.id = orders.restaurant_id
  JOIN users ON users.id = orders.user_id
  WHERE restaurants.name = $;`, [limit])
  .then(res => {
    return res.rows;
  })
  .catch(err => {
    throw err;
  })
}

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
