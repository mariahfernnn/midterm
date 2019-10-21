-- Midterm Food INSERT

-- INSERT INTO users
INSERT INTO users (id, name, is_restaurant_owner)
VALUES('1', 'Salvatore Mele', true),
('2', 'Steve Gonzalez', true),
('3', 'Susur Lee', true);

-- INSERT INTO restaurants
INSERT INTO restaurants (id, name, street_address, city, province, post_code, country, cuisine, owner_id)
VALUES ('1', 'Oretta', '633 King Street', 'Toronto', 'Ontario', 'M5V 1M5', 'Canada', 'Italian', '1'),
('2', 'Baro', '485 King Street', 'Toronto', 'Ontario', 'M5V 1K4', 'Canada', 'Latin', '2'),
('3', 'Lee', '601 King Street', 'Toronto', 'Ontario', 'M5V 1M5', 'Canada', 'Asian Fusion', '3');


-- INSERT INTO orders
INSERT INTO orders (id, date_time_ordered_created, order_is_complete, total_amount, restaurant_id, customer_id)
VALUES ('1', CURRENT_TIMESTAMP, false, '55', '1', '1');

-- INSERT INTO menu_items
INSERT INTO menu_items (id, restaurant_id, name, description, price)
VALUES ('4', '1', 'Piemonte', 'flor di latte, truffle crema, roasted garlic, mix mushroom, tomato cheese', '21'),
('3', '1', 'Barbabietola', 'roasted beets, goat yoghurt, almond & pistashio dressing', '15'),
('5', '1', 'Linguine al Pomodoro', 'yellow tomato pasta, cherry tomatoes, parmigiana, basil', '19');

-- INSERT INTO order_items
INSERT INTO order_items (id, quantity, customer_id, restaurant_id, order_id, menu_items_id)
VALUES
('1', '3', '1', '1', '1', '3'),
('2', '3', '1', '1', '1', '4'),
('3', '3', '1', '1', '1', '5');

