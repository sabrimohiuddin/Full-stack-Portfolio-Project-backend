// // DEPENDENCIES
// const cors = require("cors");
// const express = require("express");

// // CONFIGURATION
// const app = express();

// // MIDDLEWARE
// app.use(cors());
// app.use(express.json());

// // ROUTES
// app.get("/", (req, res) => {
//   res.send("Welcome to the Product Store App");
// });

// // Products ROUTES
// const productController = require("./controllers/productController.js");
// app.use("/products", productController);


// const usersController = require("./controllers/usersController.js");
// app.use("/users", usersController);


// // Reviews ROUTES
// const reviewsController = require("./controllers/reviewsController.js");
// app.use("/products/:productId/reviews", reviewsController);

// // 404 PAGE
// app.get("*", (req, res) => {
//   res.status(404).send("Page not found");
// });

// // EXPORT
// module.exports = app;


// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the Product Store App");
});

// Controllers imports
const productController = require("./controllers/productController.js");
const reviewsController = require("./controllers/reviewsController.js");
// const usersController = require("./controllers/usersController.js");  // Imported users controller

// Setup routes
app.use("/products", productController);
app.use("/products/:productId/reviews", reviewsController);
// app.use("/users", usersController);  // Route for users

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;

