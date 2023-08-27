-- DROP DATABASE IF EXISTS products_dev;
-- CREATE DATABASE products_dev;

-- \c products_dev


-- CREATE TABLE products (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     description TEXT,
--     price DECIMAL(10, 2) NOT NULL,
--     image_url VARCHAR(255),
--     stock_quantity INTEGER NOT NULL
-- );



-- DROP DATABASE IF EXISTS users;
-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     username VARCHAR(255) UNIQUE NOT NULL,
--     password VARCHAR(255) NOT NULL, -- This should store hashed passwords, never plain-text
--     email VARCHAR(255) UNIQUE NOT NULL,
--     full_name VARCHAR(255),
--     address TEXT,
--     joined_date DATE DEFAULT CURRENT_DATE
-- );

-- DROP TABLE IF EXISTS orders;

-- CREATE TABLE orders (
--     id SERIAL PRIMARY KEY,
--     user_id INTEGER REFERENCES users(id), -- Foreign Key linking to users table
--     order_date DATE DEFAULT CURRENT_DATE,
--     total_price DECIMAL(10, 2),
--     status VARCHAR(50) DEFAULT 'Pending' -- e.g., 'Pending', 'Shipped', 'Delivered', 'Cancelled'
-- );

-- DROP TABLE IF EXISTS order_products;

-- CREATE TABLE order_products (
--     order_id INTEGER REFERENCES orders(id),
--     product_id INTEGER REFERENCES products(id),
--     quantity INTEGER NOT NULL,
--     price_at_time_of_order DECIMAL(10, 2) NOT NULL,
--     PRIMARY KEY (order_id, product_id) -- Composite primary key
-- );

-- DROP DATABASE IF EXISTS reviews;

-- CREATE TABLE reviews (
--     id SERIAL PRIMARY KEY,
--     product_id INTEGER REFERENCES products(id), -- Foreign Key linking to products table
--     user_id INTEGER REFERENCES users(id), -- Foreign Key linking to users table
--     rating INTEGER CHECK (rating >= 1 AND rating <= 5), -- Rating out of 5
--     comment TEXT,
--     review_date DATE DEFAULT CURRENT_DATE
-- );


DROP DATABASE IF EXISTS products_dev;
CREATE DATABASE products_dev;

\c products_dev

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255),
    stock_quantity INTEGER NOT NULL
);


-- DROP TABLE IF EXISTS users;
-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     username VARCHAR(255) UNIQUE NOT NULL,
--     password VARCHAR(255) NOT NULL, -- This should store hashed passwords, never plain-text
--     email VARCHAR(255) UNIQUE NOT NULL,
--     full_name VARCHAR(255),
--     address TEXT,
--     joined_date DATE DEFAULT CURRENT_DATE
-- );

DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    review_date DATE DEFAULT CURRENT_DATE
);



 -- user_id INTEGER REFERENCES users(id),