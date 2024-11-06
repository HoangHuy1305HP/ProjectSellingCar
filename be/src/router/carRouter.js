import express from "express";
import { addCar, deleteCar, getCars } from "../controller/carController.js";

const router = express.Router();

router.post("/addcar", addCar);
router.get("/getcars", getCars);
router.delete("/deletecar/:id", deleteCar);

export default router;
