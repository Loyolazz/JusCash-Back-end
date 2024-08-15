import { Router } from "express";

import { createLead, updateLead, getLead, getLeads } from "../controllers/leadController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router
    .route("/lead")
    .post(authMiddleware, createLead)
    .put(authMiddleware, updateLead);

router
    .route("/lead/:id")
    .get(authMiddleware, getLead);

router
    .route("/leads")
    .get(authMiddleware, getLeads);

export default router;
