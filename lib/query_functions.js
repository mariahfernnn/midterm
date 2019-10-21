const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'appName'
});

// Get the restaurant info
const getRestaurantInfo = function (restaurantName, limit) {
  return pool.query(`SELECT restaurants.name, restaurants.street_address, restaurants.city , restaurants.province , restaurants.post_code , restaurants.country , restaurants.cuisine
  FROM restaurants WHERE restaurants.name = $;`, [limit])
  .then(res => {
    return res.rows[0];
  })
  .catch(err => {
    throw err;
  })
}
