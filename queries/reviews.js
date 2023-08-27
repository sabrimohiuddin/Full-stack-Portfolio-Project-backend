const db = require("../db/dbConfig.js")

const getAllReviews = async (product_id) => {
    try {
        const allReviews = await db.any(
            "SELECT * FROM reviews WHERE product_id=$1",
            product_id
        )
        return allReviews
    } catch (err) {
        return err
    }
}

const getReview = async (id) => {
    try {
        const oneReview = await db.one("SELECT * FROM reviews WHERE id=$1", id)
        return oneReview
    } catch (error) {
        return error;
    }
}

const newReview = async (review) => {
    try {
      const newReview = await db.one(
        "INSERT INTO reviews (rating, comment, product_id) VALUES($1, $2, $3) RETURNING *",
        [
          review.rating,
          review.comment,
          review.product_id
        ]
      );
      return newReview;
    } catch (error) {
      return error;
    }
  };
  

const deleteReview = async (id) => {
    try {
        const deletedReview = await db.one(
            "DELETE FROM reviews WHERE id = $1 RETURNING *",
            id
        )
        return deletedReview;
    } catch (error) {
        return error;
    }
}

const updateReview = async (id, review) => {
    try {
        const updatedReview = await db.one(
            "UPDATE reviews SET reviewer=$1, title=$2, content=$3, rating=$4, product_id=$5 WHERE id=$6 RETURNING *",
            [
                review.reviewer,
                review.title,
                review.content,
                review.rating,
                review.product_id,
                id
            ]
        )
        return updatedReview;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllReviews,
    getReview,
    newReview,
    deleteReview,
    updateReview,
}
