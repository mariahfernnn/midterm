-- Users table seeds here (Example)
INSERT INTO users (name)
VALUES('Michelle');

INSERT INTO restaurants (name, street_address, city, province, post_code, country, cuisine)
VALUES ('Oretta', '633 King Street West', 'Toronto', 'Ontario', 'M5V 1M5', 'Canada', 'Italian');

-- Leave the order_is_complete column blank
INSERT INTO orders (date_time_ordered_created, order_is_complete, total_amount, restaurant_id, user_id)
VALUES (CURRENT_TIMESTAMP, false, 64, 1, 1);

INSERT INTO menu_items (restaurant_id, name, description, price)
VALUES (1, 'Burrata con Carciofi', 'shaved artichoke salad, pecorino romano, black pepper, lemon', 24);

INSERT INTO menu_items (restaurant_id, name, description, price)
VALUES (1, 'Piemonte', 'fior di latte, truffle crema, roasted garlic, mix mushroom, tomato cheese', 21);

INSERT INTO menu_items (restaurant_id, name, description, price)
VALUES (1, 'Linguine al Pomodoro', 'yellow tomato pasta, cherry tomatoes, parmigiana, basil', 19);

INSERT INTO order_items (quantity, restaurant_id, order_id, menu_items_id)
VALUES ('1', '1', '1', '1');

INSERT INTO order_items (quantity, restaurant_id, order_id, menu_items_id)
VALUES ('1', '1', '1', '4');

INSERT INTO order_items (quantity, restaurant_id, order_id, menu_items_id)
VALUES ('1', '1', '1', '5');
