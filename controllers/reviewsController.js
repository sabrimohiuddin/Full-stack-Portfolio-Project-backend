const express = require("express");
const { getProduct } = require("../queries/products.js");
const reviews = express.Router({ mergeParams: true });
const {
  getAllReviews,
  getReview,
  newReview,
  deleteReview,
  updateReview,
} = require("../queries/reviews");

// INDEX
// reviews.get("/", async (req, res) => {
//   const { productId } = req.params;
//   try {
//     const allReviews = await getAllReviews(productId);
//     res.json(allReviews);
//   } catch (err) {
//     res.json(err);
//   }
// });


reviews.get("/", async (req, res) => {
  const { productId } = req.params;
  try {
    const allReviews = await getAllReviews(productId);
    res.json(allReviews);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});


// SHOW
reviews.get("/:id", async (req, res) => {
  const { id } = req.params;
  const review = await getReview(id);
  if (review) {
    res.json(review);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// UPDATE
reviews.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedReview = await updateReview(id, req.body);
  if (updatedReview.id) {
    res.status(200).json(updatedReview);
  } else {
    res.status(404).json("Review not found");
  }
});

reviews.post("/", async (req, res) => {
  const review = await newReview(req.body);
  res.status(200).json(review);
});

// DELETE
reviews.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deletedReview = await deleteReview(id);
  if (deletedReview.id) {
    res.status(200).json(deletedReview);
  } else {
    res.status(404).json({ error: "Review not found" });
  }
});

// TEST JSON NEW
// Example for reviews associated with products. Adjust fields accordingly.
// {
//     "reviewer": "Jane",
//     "content": "This product is amazing!",
//     "product_id": "5",
//     "rating": "5"
// }
module.exports = reviews;


