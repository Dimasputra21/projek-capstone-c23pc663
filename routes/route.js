import express from "express";
import { getUsers, register, login, logOut } from "../controller/controllerUser.js";
import { verifyToken } from "../middleware/verifiedToken.js";
import { refreshToken } from "../controller/refreshToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', register);
router.post('/login', login);
router.get('/token', refreshToken);
router.delete('/logout', logOut);

export default router;