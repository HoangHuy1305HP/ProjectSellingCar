import express from "express";
import { uploadImage, uploadListImg } from "../controller/imgController.js";
import multer from "multer";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/upload", upload.single("image"), uploadImage);
router.post("/uploadlistimg", upload.array("images"), uploadListImg);

export default router;
