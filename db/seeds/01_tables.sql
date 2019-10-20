-- Users table seeds here (Example)
-- Leave is_restaurant_owner blank
INSERT INTO users (users.name, is_restaurant_owner)
VALUES('Michelle', '');

INSERT INTO restaurants (restaurants.name, street_address, city, province, post_code, country, cuisine)
VALUES ('Oretta', '633 King Street', 'Toronto', 'Ontario', 'M5V1M5', 'Canada', 'Italian');

-- Leave the order_is_complete column blank
INSERT INTO orders (date_time_ordered_created, order_is_complete, total_amount, restaurant_id, user_id)
VALUES (CURRENT_TIMESTAMP, '', '55', '1', '1');

INSERT INTO menu_items (restaurant_id, menu_items.name, description, price)
VALUES ('1', 'Piemonte', 'flor di latte, truffle crema, roasted garlic, mix mushroom, tomato cheese', '21');

INSERT INTO menu_items (restaurant_id, menu_items.name, description, price)
VALUES ('1', 'Barbabietola', 'roasted beets, goat yoghurt, almond & pistashio dressing' '15');

INSERT INTO menu_items (restaurant_id, menu_items.name, description, price)
VALUES ('1', 'Linguine al Pomodoro', 'yellow tomato pasta, cherry tomatoes, parmigiana, basil' '19');

INSERT INTO order_items (quantity, restaurant_id, order_id, menu_items_id)
VALUES ('3', '1', '1', '3');

INSERT INTO order_items (quantity, restaurant_id, order_id, menu_items_id)
VALUES ('3', '1', '1', '4');

INSERT INTO order_items (quantity, restaurant_id, order_id, menu_items_id)
VALUES ('3', '1', '1', '5');
