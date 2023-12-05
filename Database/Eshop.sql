-- Create the database
CREATE DATABASE eshop;

-- Switch to the database
USE eshop;

-- Table: Users
CREATE TABLE Users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  city VARCHAR(255),
  address VARCHAR(255),
  points INT,
  password VARCHAR(255) NOT NULL
);

-- Table: Guest
CREATE TABLE Guest (
  id INT PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  city VARCHAR(255),
  address VARCHAR(255)
);

-- Table: Category
CREATE TABLE Category (
  id INT PRIMARY KEY AUTO_INCREMENT,
  Categ VARCHAR(255) NOT NULL
);

-- Table: Products
CREATE TABLE Products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  productName VARCHAR(255) NOT NULL,
  descrip TEXT,
  quantity INT,
  price DECIMAL(10, 2),
  idCategory INT,
  FOREIGN KEY (idCategory) REFERENCES Category(id)
);

-- Table: Orders
CREATE TABLE Orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  userId INT,
  guestId INT,
  totalPrice DECIMAL(10, 2), 
  FOREIGN KEY (userId) REFERENCES Users(id),
  FOREIGN KEY (guestId) REFERENCES Guest(id)
); 

-- Table: OrderItems
CREATE TABLE OrderItems (
  id INT PRIMARY KEY AUTO_INCREMENT,
  orderId INT,
  productId INT,
  quantity INT,
  totalPrice DECIMAL(10, 2), 
  FOREIGN KEY (orderId) REFERENCES Orders(id),
  FOREIGN KEY (productId) REFERENCES Products(id)
);

INSERT INTO Category (Categ)

VALUES
  ('Skincare'),
  ('Makeup'),
  ('Haircare'),
  ('Fragrance'),
  ('Body Care');
  

INSERT INTO Products (productName, descrip, quantity, price, idCategory)
VALUES
  ('Cleansing Foam', 'Gentle facial cleanser for daily use', 50, 14.99, 1),
  ('Moisturizing Cream', 'Hydrating face cream for all skin types', 30, 29.99, 1),
  ('Mascara', 'Volumizing and lengthening mascara', 40, 12.99, 2),
  ('Lipstick', 'Long-lasting matte lipstick in a vibrant red shade', 20, 9.99, 2),
  ('Shampoo', 'Nourishing shampoo for healthy and shiny hair', 50, 16.99, 3),
  ('Conditioner', 'Deep conditioning treatment for smooth and silky hair', 45, 18.99, 3),
  ('Perfume', 'Elegant floral fragrance for women', 25, 49.99, 4),
  ('Face Mask', 'Revitalizing face mask with natural ingredients', 60, 7.99, 1),
  ('Eyeshadow Palette', 'Palette with a range of neutral and vibrant eyeshadows', 15, 24.99, 2),
  ('Hair Serum', 'Nourishing serum for frizz-free and manageable hair', 35, 21.99, 3),
  ('Body Lotion', 'Moisturizing body lotion with a refreshing scent', 40, 12.99, 5),
  ('Highlighter', 'Illuminating highlighter for a radiant glow', 30, 14.99, 2),
  ('Facial Toner', 'Balancing toner to hydrate and refine skin', 55, 16.99, 1),
  ('Eyeliner', 'Long-wearing eyeliner for precise application', 25, 8.99, 2),
  ('Hair Mask', 'Intensive hair mask for deep conditioning and repair', 20, 19.99, 3),
  ('Blush', 'Pigmented blush for a natural flush of color', 35, 11.99, 2),
  ('Body Wash', 'Gentle body wash with a soothing fragrance', 40, 9.99, 5),
  ('Facial Scrub', 'Exfoliating facial scrub to remove dead skin cells', 30, 13.99, 1),
  ('Lip Balm', 'Hydrating lip balm for soft and smooth lips', 50, 4.99, 2),
  ('Hand Cream', 'Nourishing hand cream for dry hands', 60, 8.99, 5);

