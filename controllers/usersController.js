const express = require("express");
const users = express.Router();

const {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require("../queries/users.js");

// INDEX (Get All Users)
users.get("/", async (req, res) => {
    try {
        const allUsers = await getAllUsers();
        res.json(allUsers);
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// SHOW (Get User by ID)
users.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await getUser(id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// CREATE (Create New User)
users.post("/", async (req, res) => {
    try {
        const newUser = await createUser(req.body);
        res.json(newUser);
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// UPDATE (Update User)
users.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await updateUser(id, req.body);
        if (updatedUser.id) {
            res.json(updatedUser);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// DELETE (Delete User)
users.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await deleteUser(id);
        if (deletedUser.id) {
            res.json(deletedUser);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = users;
