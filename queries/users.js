const db = require("../db/dbConfig.js");

// Get All Users
const getAllUsers = async () => {
    try {
        const allUsers = await db.any("SELECT * FROM users");
        return allUsers;
    } catch (error) {
        return error;
    }
}

// Get User by ID
const getUser = async (id) => {
    try {
        const user = await db.one("SELECT * FROM users WHERE id=$1", id);
        return user;
    } catch (error) {
        return error;
    }
}

// Create New User
const createUser = async (user) => {
    try {
        const newUser = await db.one(
            "INSERT INTO users (username, password, email, full_name, address) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [user.username, user.password, user.email, user.full_name, user.address]
        );
        return newUser;
    } catch (error) {
        return error;
    }
}

// Update User
const updateUser = async (id, user) => {
    try {
        const updatedUser = await db.one(
            "UPDATE users SET username=$1, password=$2, email=$3, full_name=$4, address=$5 WHERE id=$6 RETURNING *",
            [user.username, user.password, user.email, user.full_name, user.address, id]
        );
        return updatedUser;
    } catch (error) {
        return error;
    }
}

// Delete User
const deleteUser = async (id) => {
    try {
        const deletedUser = await db.one("DELETE FROM users WHERE id=$1 RETURNING *", id);
        return deletedUser;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};
