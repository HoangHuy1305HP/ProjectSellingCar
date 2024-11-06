import express from "express";
import {
  Register,
  Login,
  refreshAccessToken,
  logout,
  resetPassword,
  sendOtp,
  verifyOtp,
} from "../controller/register-login.js";
import { getUsername } from "../controller/getUsername.js";
import { authentication } from "../middleware/authentication.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.post("/logout", logout);
router.get("/user", authentication, getUsername);
router.post("/user/refresh", authentication, refreshAccessToken);
router.post("/forgot-password", sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/reset-password", resetPassword);

export default router;
