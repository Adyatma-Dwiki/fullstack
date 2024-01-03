import express from "express";
import {getUsers,
        getUsersById,
        createUser,
        updateUser,
        deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

// getUser
router.get('/users', getUsers);
// getUserById
router.get('/users/:id', getUsersById);
// createUser
router.post('/users', createUser);
// updateUser
router.patch('/users/:id', updateUser);
// deleteUser
router.delete('/users/:id', deleteUser);




export default router;