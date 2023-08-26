\c products_dev;

-- INSERT INTO products (name, description, price, image_url, stock_quantity) VALUES 
-- ('Aquarium Tank 10L', 'A 10-liter aquarium tank suitable for small fishes.', 25.99, 'https://c-ol.niceshops.com/upload/image/product/large/default/13815_c2d7341f.jpg', 100),
-- ('Aquarium Filter', 'High-efficiency aquarium filter suitable for 10-50 liter tanks.', 15.99, 'https://m.media-amazon.com/images/I/817pDl+ydXL.jpg', 80),
-- ('Fish Food', 'Nutritious food for tropical fishes.', 5.99, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrfiig8vn9IBwbKxQqtyaEs4zsBTYk_hw-VJEQGmyNCcdlKQ_EgIWFtUkidJHwb45ALqU&usqp=CAU', 150);



INSERT INTO products (name, description, price, image_url, stock_quantity) VALUES 
('Aquarium Tank 10L', 'A 10-liter aquarium tank suitable for small fishes.', 25.99, 'https://c-ol.niceshops.com/upload/image/product/large/default/13815_c2d7341f.jpg', 100),
('Aquarium Filter', 'High-efficiency aquarium filter suitable for 10-50 liter tanks.', 15.99, 'https://m.media-amazon.com/images/I/817pDl+ydXL.jpg', 80),
('Fish Food', 'Nutritious food for tropical fishes.', 5.99, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrfiig8vn9IBwbKxQqtyaEs4zsBTYk_hw-VJEQGmyNCcdlKQ_EgIWFtUkidJHwb45ALqU&usqp=CAU', 150);

INSERT INTO users (username, password, email, full_name, address) VALUES 
('User1', 'hashed_password_1', 'user1@example.com', 'John Doe', '123 Main St, City1'),
('User2', 'hashed_password_2', 'user2@example.com', 'Jane Smith', '456 Elm St, City2'),
('User3', 'hashed_password_3', 'user3@example.com', 'Bob Johnson', '789 Pine St, City3'),
('User4', 'hashed_password_4', 'user4@example.com', 'Alice Davis', '101 Maple St, City4');


INSERT INTO reviews (product_id, user_id, rating, comment, review_date) VALUES 
(1, 1, 5, 'The 10L Aquarium Tank is perfect for my small fishes. Very durable and looks great!', '2023-08-10'),
(1, 2, 4, 'Good quality tank, but I wish it came in other colors.', '2023-08-08'),
(2, 1, 5, 'The filter works wonders. My tank has never been clearer!', '2023-08-05'),
(3, 3, 3, 'The fish food is okay, but my fishes dont seem to like it as much as the previous brand I used.', '2023-08-07'),
(3, 4, 4, 'Decent food for the price. Will buy again.', '2023-08-09');
