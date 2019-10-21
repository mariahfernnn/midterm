-- Query to get info for a particular restaurant
`SELECT restaurants.name, restaurants.street_address, restaurants.city , restaurants.province , restaurants.post_code , restaurants.country , restaurants.cuisine
FROM restaurants WHERE restaurants.name = $;`

-- Query to get restaurant for a particular cuisine
`SELECT restaurants.name, restaurants.street_address, restaurants.city , restaurants.province , restaurants.post_code , restaurants.country , restaurants.cuisine
FROM  restaurants.cuisine LIKE $;`

-- Query to get order info for a particular restaurant
`SELECT orders.date_time_ordered_created, orders.order_is_complete, orders.total_amount, restaurants.name, users.name
FROM orders
JOIN restaurants ON restaurants.id = orders.restaurant_id
JOIN users ON users.id = orders.user_id
WHERE restaurants.name = $;`

-- Query to get order info for a particular user
`SELECT orders.date_time_ordered_created, orders.order_is_complete, orders.total_amount, restaurants.name, users.name
FROM orders
JOIN restaurants ON restaurants.id = orders.restaurant_id
JOIN users ON users.id = orders.user_id
WHERE restaurants.name = $1 AND users.name = $2;`

-- Query to get total for order with user's name and restaurant's name
`SELECT orders.total_amount, restaurants.name, users.name
FROM orders
JOIN restaurants ON restaurants.id = orders.restaurant_id
JOIN users ON users.id = orders.user_id
WHERE restaurants.name = $ AND users.name = $;`

-- Query to get quantity of items purchased for a particular user
`SELECT order_items.quantity, users.name, restaurants.name
FROM order_items
JOIN users ON users.id = order_items.user_id
JOIN restaurants ON restaurants.id = order_items.restaurant_id
WHERE users.name = $;`

-- Query to get quantity of items purchased for a particular restaurant
`SELECT order_items.quantity, users.name, restaurants.name
FROM order_items
JOIN users ON users.id = order_items.user_id
JOIN restaurants ON restaurants.id = order_items.restaurant_id
WHERE restaurants.name = $;`

-- Query to get user info
`SELECT users.name
FROM users
WHERE users.name = $;`

-- Query to get order status for a particular user
`SELECT orders.order_is_complete, users.name
FROM orders
JOIN users ON users.id = orders.user_id
WHERE users.name = $;`

-- Query to get menu for each restaurant
`SELECT menu_items.name, menu_items.price, restaurants.name
FROM menu_items
JOIN restaurants ON restaurants.id = menu_items.restaurant_id
WHERE restaurants.name = $;`


