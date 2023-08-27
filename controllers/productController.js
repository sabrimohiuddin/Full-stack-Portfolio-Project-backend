const express = require("express");
const products = express.Router();
const reviewsController = require("./reviewsController.js");

// Using reviews for products, similar to comments for cities
products.use("/:productId/reviews", reviewsController);

const {
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../queries/products");

// Replace checkCities.js with checkProducts.js for products validations
const { checkPrice, checkName, validateImageURL } = require("../validations/checkProducts.js");

// INDEX
products.get("/", async (req, res) => {
  const allProducts = await getAllProducts();
  if (allProducts[0]) {
    res.status(200).json(allProducts);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW 
products.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await getProduct(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
products.post("/", checkPrice, checkName, validateImageURL, async (req, res) => {
  try {
    const product = await createProduct(req.body);
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE
products.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await deleteProduct(id); 
  if (deletedProduct.id) { 
    res.status(200).json(deletedProduct);
  } else {
    res.status(404).json("Product not found");
  }
});

// UPDATE
products.put("/:id", checkName, checkPrice, validateImageURL, async (req, res) => { 
  try {
    const { id } = req.params;
    const updatedProduct = await updateProduct(id, req.body); 

    if (!updatedProduct) {
      res.status(404).json({ error: 'Product not found or could not be updated' });
      return;
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error during product update:', error);
    res.status(400).json({ error: 'Bad request', details: error.message });
  }
});


module.exports = products;




