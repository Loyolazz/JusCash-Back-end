import { Router } from "express";

import { getUser, createUser } from "../controllers/userController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router
    .route("/user")
    .get(authMiddleware, getUser)
    .post(createUser);

export default router;
