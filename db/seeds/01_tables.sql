-- Midterm Food INSERT

-- INSERT INTO users
INSERT INTO users (name)
VALUES('Salvatore Mele'),
('Steve Gonzalez'),
('Susur Lee');

-- INSERT INTO restaurants
INSERT INTO restaurants (name, street_address, city, province, post_code, country, cuisine, owner_id)
VALUES ('Oretta', '633 King Street', 'Toronto', 'Ontario', 'M5V 1M5', 'Canada', 'Italian', 1),
('Baro', '485 King Street', 'Toronto', 'Ontario', 'M5V 1K4', 'Canada', 'Latin', 2),
('Lee', '601 King Street', 'Toronto', 'Ontario', 'M5V 1M5', 'Canada', 'Asian Fusion', 3);


-- INSERT INTO orders
-- Sample data only
INSERT INTO orders (date_time_ordered_created, order_is_complete, total_amount, restaurant_id, customer_id)
VALUES (CURRENT_TIMESTAMP, false, 55, 1, 1),
(CURRENT_TIMESTAMP, false, 55, 2, 2);

-- INSERT INTO menu_items
INSERT INTO menu_items (restaurant_id, name, description, price)
VALUES(1, 'Burrata con Carciofi', 'shaved artichoke salad, pecorino romano, black pepper, lemon', 24),
(1, 'Cesare', 'baby romaine, focaccia crumbs, pickled white anchovies, parmiggiano, pancetta, caesar dressing', 15),
(1, 'Barbabietola', 'roasted beets, goat yoghurt, almond & pistachio dressing', 15),
(1, 'Piemonte', 'flor di latte, truffle crema, roasted garlic, mix mushroom, tomato cheese', 21),
(1, 'Linguine al Pomodoro', 'yellow tomato pasta, cherry tomatoes, parmigiana, basil', 19),
(1, 'Conchiglie e Pistacchio', 'shell shaped pasta, pistachio pesto, garlic, baby shrimp, orange zest, basil', 25),
(2, 'Harvest Ceviche', 'swordfish, yellow tomato, chill, basil, jicama, chulpes, plantain', 24),
(2, 'Tiradito', 'albacore tuna, passion fruit & lull, potato, squash, chili, cilantro,sesame seeds', 21),
(2, 'Campechano', 'shrimp, scallop, octopus, tomato, Valentina, olive, avocado, celery, citrus, cilantro, corn tortillas', 22),
(2, 'Cavatelli', 'Fresh pasta + piquillo peppers + charred corn + scallions + popcorn cream, queso fresco, pecorino, lime', 19),
(2, 'Arroz Con Pollo', 'roasted chicken supreme, avocado rice, peas & corn, saffron chicken jus, tostones', 29),
(2, 'Big Ass Steak', 'roasted bone-in ribeye, chimichurri, veggies', 120),
(3, 'Vietnamese Fresh Roll', 'tofu, avocado, kombucha, thai basil, pickled radish, sesame dip', 14),
(3, 'Vegetarian Cheese Burger Spring Roll', 'sweet chili sauce, pickled veg, lettuce wrap', 14),
(3, 'Spicy Crispy Tofu', 'mushroom & pepper compote, wildflower honey soya chili glaze, golden sand, watermelon radish', 16),
(3, 'Asian Crab Cakes With Smoked Kielbasa & Machego Cheese', 'manchego, green apple & Japanese cabbage kimchi, arugula', 30),
(3, 'Char Sui Duck Breast & Confit', 'Beijing duck garnish, foie gras pate, steamed pancake', 36),
(3, 'Australian Wagyu Beef Carpaccio & Burrata', 'sweet onion, pickled mustard seeds, pumpkin seed oil, homemade gherkins, capers, heirloom beet', 29);

-- INSERT INTO order_items
-- Sample data only
INSERT INTO order_items (quantity, customer_id, restaurant_id, order_id, menu_items_id)
VALUES
(3, 1, 1, 1, 3),
(3, 1, 1, 1, 4),
(3, 1, 1, 1, 5);
