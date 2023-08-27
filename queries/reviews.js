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
    // Debugging logs
    console.log("Updating Review with ID:", id);
    console.log("New Review Data:", review);
    
    try {
        const updatedReview = await db.one(
            "UPDATE reviews SET rating=$1, comment=$2, product_id=$3 WHERE id=$4 RETURNING *",
            [
                review.rating,
                review.comment,
                review.product_id,
                id
            ]
        );
        
        // Debugging log for successful update
        console.log("Update successful:", updatedReview);
        
        return updatedReview;
    } catch (error) {
        // Debugging log for failed update
        console.error("Update failed with error:", error);
        
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

