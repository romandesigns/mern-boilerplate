// Dependencies
import express from "express";
const router = express.Router();

// Controllers
import { getHome } from "../controllers/homeControllers.js";

router.get("/", getHome);

export default router;
