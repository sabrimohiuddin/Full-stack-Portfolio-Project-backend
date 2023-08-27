-- \c products_dev;

-- INSERT INTO products (name, description, price, image_url, stock_quantity) VALUES 
-- ('Aquarium Tank 10L', 'A 10-liter aquarium tank suitable for small fishes.', 25.99, 'https://c-ol.niceshops.com/upload/image/product/large/default/13815_c2d7341f.jpg', 100),
-- ('Aquarium Filter', 'High-efficiency aquarium filter suitable for 10-50 liter tanks.', 15.99, 'https://m.media-amazon.com/images/I/817pDl+ydXL.jpg', 80),
-- ('Fish Food', 'Nutritious food for tropical fishes.', 5.99, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrfiig8vn9IBwbKxQqtyaEs4zsBTYk_hw-VJEQGmyNCcdlKQ_EgIWFtUkidJHwb45ALqU&usqp=CAU', 150),
-- ('Aquarium Heater', 'Submersible heater for 10-50 liter tanks.', 19.99, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxnN8j3mzx3SJoC6kICjy9Tbp-a0X3O_DT1A&usqp=CAU', 50),
-- ('Aquarium Plants', 'Artificial plants for aesthetic appeal.', 8.99, 'https://cdn11.bigcommerce.com/s-i80728ueue/images/stencil/1280x1280/products/33778/39691/limnophila_indica__14637.1655097506.jpg?c=2', 100),
-- ('Fish Net', 'Soft net for catching and transferring fish.', 3.99, 'https://down-my.img.susercontent.com/file/746e1a01d3cb4880fc64bf05399d0d92', 150),
-- ('Water Conditioner', 'Removes chlorine and detoxifies heavy metals.', 9.99, 'https://apifishcare.com/images/products-us/tap-water-conditioner/tap-water-conditioner-32.jpg', 75),
-- ('LED Light', 'Aquarium LED light with night mode.', 29.99, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlV7Eemgt86POUTs5e7qrWA7_KcjDcEQgHFA&usqp=CAU', 0);




-- INSERT INTO users (username, password, email, full_name, address) VALUES 
-- ('User1', 'hashed_password_1', 'user1@example.com', 'John Doe', '123 Main St, City1'),
-- ('User2', 'hashed_password_2', 'user2@example.com', 'Jane Smith', '456 Elm St, City2'),
-- ('User3', 'hashed_password_3', 'user3@example.com', 'Bob Johnson', '789 Pine St, City3'),
-- ('User4', 'hashed_password_4', 'user4@example.com', 'Alice Davis', '101 Maple St, City4'),
-- ('User5', 'hashed_password_5', 'user5@example.com', 'Emily Brown', '202 Oak St, City5'),
-- ('User6', 'hashed_password_6', 'user6@example.com', 'William Wilson', '303 Birch St, City6'),
-- ('User7', 'hashed_password_7', 'user7@example.com', 'Sophia Clark', '404 Cedar St, City7'),
-- ('User8', 'hashed_password_8', 'user8@example.com', 'Liam Johnson', '505 Cherry St, City8');


-- INSERT INTO reviews (product_id, rating, comment, review_date) VALUES 
-- (1, 1, 5, 'The 10L Aquarium Tank is perfect for my small fishes. Very durable and looks great!', '2023-08-10'),
-- (1, 2, 4, 'Good quality tank, but I wish it came in other colors.', '2023-08-08'),
-- (2, 1, 5, 'The filter works wonders. My tank has never been clearer!', '2023-08-05'),
-- (3, 3, 3, 'The fish food is okay, but my fishes dont seem to like it as much as the previous brand I used.', '2023-08-07'),
-- (3, 4, 4, 'Decent food for the price. Will buy again.', '2023-08-09'),
-- (4, 5, 5, 'The fish net is really soft. Makes transferring fish stress-free.', '2023-08-15'),
-- (5, 6, 4, 'The water conditioner works well but is a bit pricey.', '2023-08-12'),
-- (6, 7, 3, 'The LED light is good but lacks different color options.', '2023-08-11'),
-- (6, 8, 5, 'LED light works great and the night mode is a nice touch.', '2023-08-16'),
-- (4, 8, 2, 'The fish net broke after a few uses. Not durable.', '2023-08-14');


\c products_dev;

-- Seed products
INSERT INTO products (name, description, price, image_url, stock_quantity) VALUES 
('Aquarium Tank 10L', 'A 10-liter aquarium tank suitable for small fishes.', 25.99, 'https://c-ol.niceshops.com/upload/image/product/large/default/13815_c2d7341f.jpg', 100),
('Aquarium Filter', 'High-efficiency aquarium filter suitable for 10-50 liter tanks.', 15.99, 'https://m.media-amazon.com/images/I/817pDl+ydXL.jpg', 80),
('Fish Food', 'Nutritious food for tropical fishes.', 5.99, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrfiig8vn9IBwbKxQqtyaEs4zsBTYk_hw-VJEQGmyNCcdlKQ_EgIWFtUkidJHwb45ALqU&usqp=CAU', 150),
('Aquarium Heater', 'Submersible heater for 10-50 liter tanks.', 19.99, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxnN8j3mzx3SJoC6kICjy9Tbp-a0X3O_DT1A&usqp=CAU', 50),
('Aquarium Plants', 'Artificial plants for aesthetic appeal.', 8.99, 'https://cdn11.bigcommerce.com/s-i80728ueue/images/stencil/1280x1280/products/33778/39691/limnophila_indica__14637.1655097506.jpg?c=2', 100),
('Fish Net', 'Soft net for catching and transferring fish.', 3.99, 'https://down-my.img.susercontent.com/file/746e1a01d3cb4880fc64bf05399d0d92', 150),
('Water Conditioner', 'Removes chlorine and detoxifies heavy metals.', 9.99, 'https://apifishcare.com/images/products-us/tap-water-conditioner/tap-water-conditioner-32.jpg', 75),
('LED Light', 'Aquarium LED light with night mode.', 29.99, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlV7Eemgt86POUTs5e7qrWA7_KcjDcEQgHFA&usqp=CAU', 0);

-- Seed reviews
INSERT INTO reviews (product_id, rating, comment, review_date) VALUES 
(1, 5, 'The 10L Aquarium Tank is perfect for my small fishes. Very durable and looks great!', '2023-08-10'),
(1, 4, 'Good quality tank, but I wish it came in other colors.', '2023-08-08'),
(2, 5, 'The filter works wonders. My tank has never been clearer!', '2023-08-05'),
(3, 3, 'The fish food is okay, but my fishes dont seem to like it as much as the previous brand I used.', '2023-08-07'),
(3, 4, 'Decent food for the price. Will buy again.', '2023-08-09'),
(4, 5, 'The fish net is really soft. Makes transferring fish stress-free.', '2023-08-15'),
(5, 4, 'The water conditioner works well but is a bit pricey.', '2023-08-12'),
(6, 3, 'The LED light is good but lacks different color options.', '2023-08-11'),
(6, 5, 'LED light works great and the night mode is a nice touch.', '2023-08-16'),
(4, 2, 'The fish net broke after a few uses. Not durable.', '2023-08-14');

