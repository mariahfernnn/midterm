-- Midterm Food INSERT

-- INSERT INTO users
INSERT INTO users (id, name, is_restaurant_owner)
VALUES('1', 'Michelle', false);

-- INSERT INTO restaurants
INSERT INTO restaurants (id, name, street_address, city, province, post_code, country, cuisine)
VALUES ('1', 'Oretta', '633 King Street', 'Toronto', 'Ontario', 'M5V 1M5', 'Canada', 'Italian');

-- INSERT INTO orders
INSERT INTO orders (id, date_time_ordered_created, order_is_complete, total_amount, restaurant_id, user_id)
VALUES ('1', CURRENT_TIMESTAMP, false, '55', '1', '1');

-- INSERT INTO menu_items
INSERT INTO menu_items (id, restaurant_id, name, description, price)
VALUES ('1', '1', 'Piemonte', 'flor di latte, truffle crema, roasted garlic, mix mushroom, tomato cheese', '21'),
('2', '1', 'Barbabietola', 'roasted beets, goat yoghurt, almond & pistashio dressing' '15'),
('3', '1', 'Linguine al Pomodoro', 'yellow tomato pasta, cherry tomatoes, parmigiana, basil' '19');

-- INSERT INTO order_items
INSERT INTO order_items (id, quantity, restaurant_id, order_id, menu_items_id)
VALUES ('1', '3', '1', '1', '3'),
('1', '3', '1', '1', '4'),
('1', '3', '1', '1', '5');

