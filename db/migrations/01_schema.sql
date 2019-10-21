--DROP TABLE statements to rerun the file easily
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS restaurants CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS order_items CASCADE;
DROP TABLE IF EXISTS menu_items CASCADE;

--Updated ALL tables - changed VARCHAR to TEXT

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  is_restaurant_owner BOOLEAN DEFAULT FALSE NOT NULL
);

--Included owner_id
CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  street_address TEXT NOT NULL,
  city TEXT NOT NULL,
  province TEXT NOT NULL,
  post_code TEXT NOT NULL,
  country TEXT NOT NULL,
  cuisine TEXT NOT NULL,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  date_time_ordered_created TIMESTAMP NOT NULL,
  order_is_complete BOOLEAN DEFAULT FALSE NOT NULL,
  total_amount NUMERIC(6,2) NOT NULL,
  restaurant_id INTEGER REFERENCES restaurants(id) ON DELETE CASCADE,
  customer_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

--Included description
CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  restaurant_id INTEGER REFERENCES restaurants(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price NUMERIC(5,2) NOT NULL
);

--Included customer_id
CREATE TABLE order_items (
  id SERIAL PRIMARY KEY NOT NULL,
  quantity INTEGER NOT NULL,
  customer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  restaurant_id INTEGER REFERENCES restaurants(id) ON DELETE CASCADE,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  menu_items_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE
);


