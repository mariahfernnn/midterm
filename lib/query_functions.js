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
// Get the restaurants info
const getRestaurants = function (db) {
  return db.query(`SELECT * FROM restaurants ORDER BY name;`)
    .then(res => {
      return res.rows;
    })
}
module.exports.getRestaurants = getRestaurants;
// Gets the menu items for a restaurant for the homepage. This is used in restaurants.js along with the restaurants get request
const getMenuItems = function (db) {
  return db.query(`SELECT * FROM menu_items ORDER BY name;`)
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      throw err;
    })
}
module.exports.getMenuItems = getMenuItems;
// Gets resturant order
const getOrderInfo = function (db, restaurantNameOfOrder) {
  return db.query(`SELECT * FROM order_items
  JOIN restaurants ON restaurants.id = orders.restaurant_id
  JOIN users ON users.id = orders.customer_id
  WHERE restaurants.name = '${restaurantNameOfOrder}';`)
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      throw err;
    })
}
module.exports.getOrderInfo = getOrderInfo;
// This function gets all the order details using the order and order_items tables
const getAllOrderInfo = function (db, order_itemsId) {
  return db.query(`SELECT * FROM order_items
  JOIN menu_items ON menu_items.id = order_items.menu_items_id
  WHERE order_items.order_id = ${order_itemsId};`)
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      throw err;
    })
}
module.exports.getAllOrderInfo = getAllOrderInfo;
// USING PROMISES. Just an alternative for learning purposes
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
const addOrderForRestaurant = async function (db, order, cb) {
  try {
    const totalAmount = order.orderItems.reduce((acc, item) =>
      acc + (item.quantity * item.price), 0);
    // Creates an insert into the orders table
    const orderId = await db.query(`
      INSERT INTO orders (created_at, total_amount, restaurant_id, user_name)
      VALUES (CURRENT_TIMESTAMP, $1, $2, $3) returning id;`,
      [totalAmount, order.restaurantId, (order.name || 'John')]);
    order.orderItems.forEach(item => {
      const orderItems = db.query(`
        INSERT INTO order_items (quantity, price, order_id, menu_items_id)
        VALUES (${item.quantity}, ${item.price}, ${orderId.rows[0].id}, ${item.id});`)
    });
    cb(orderId.rows[0].id)
  } catch (err) {
    console.error(err);
  }
};
module.exports.addOrderForRestaurant = addOrderForRestaurant;
