const db = require("../db/dbConfig.js")

// SHOW All Products
const getAllProducts = async () => {
    try {
        const allProducts = await db.any("SELECT * FROM products");
        return allProducts;
    } catch (error) {
        return error;
    }
}

// SHOW ONE Product
const getProduct = async (id) => {
    try {
        const oneProduct = await db.one("SELECT * FROM products WHERE id =$1", id);
        return oneProduct;
    } catch (error) {
        return error;
    }
}

// CREATE a Product
const createProduct = async (product) => {
    try {
        const newProduct = await db.one(
            "INSERT INTO products (name, description, price, image_url, stock_quantity) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [product.name, product.description, product.price, product.image_url, product.stock_quantity]
        );
        return newProduct;
    } catch (error) {
        return error;
    }
}

// DELETE a Product
const deleteProduct = async (id) => {
    try {
        const deletedProduct = await db.one(
            "DELETE FROM products WHERE id = $1 RETURNING *",
            id
        );
        return deletedProduct;
    } catch (error) {
        return error;
    }
}

// UPDATE a Product
const updateProduct = async (id, product) => {
    try {
        const updatedProduct = await db.one(
            "UPDATE products SET name=$1, description=$2, price=$3, image_url=$4, stock_quantity=$5 WHERE id=$6 RETURNING *",
            [product.name, product.description, product.price, product.image_url, product.stock_quantity, id]
        );
        return updatedProduct;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllProducts,
    createProduct,
    getProduct,
    deleteProduct,
    updateProduct
};
