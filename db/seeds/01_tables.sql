-- Users table seeds here (Example)
INSERT INTO users (users.name, is_restaurant_owner)
VALUES('', '');

INSERT INTO restaurants (restaurants.name, street_address, city, province, post_code, country, cuisine)
VALUES ('', '', '', '', '', '', '');

-- Leave the order_is_complete column blank
INSERT INTO orders (date_time_ordered_created, order_is_complete, total_amount, restaurant_id, user_id)
VALUES (CURRENT_TIMESTAMP, '', '', '', '');

INSERT INTO menu_items (restaurant_id, menu_items.name, price)
VALUES ('', '', '');

INSERT INTO order_items (quantity, restaurant_id, order_id, menu_items_id)
VALUES ('', '', '', '');
