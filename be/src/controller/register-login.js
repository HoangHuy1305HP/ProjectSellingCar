import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendEmail from "./ultis/sendEmail.js";

export const Register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password || !phone) {
      return res
        .status(400)
        .send("name , email, phone and password are required");
    }
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name: name,
      email,
      phone,
      password: hashedPassword,
    });
    await newUser.save();
    return res.status(200).json({ message: "Register successfully", newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const Login = async (req, res) => {
  try {
    const { name, password } = req.body;
    if (!name || !password) {
      res.status(400).send("name and password are required");
    }

    const user = await User.findOne({ name });
    if (!user) {
      res.status(404).send("Invalid credentials");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(404).send("Invalid credentials");
    }
    const payLoad = {
      id: user._id,
      name: user.name,
      role: user.role,
    };
    const accessToken = jwt.sign(payLoad, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    const refreshToken = jwt.sign(payLoad, process.env.JWT_REFRESH_SECRET, {
      expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
    });
    res
      .status(200)
      .json({ accessToken: accessToken, refreshToken: refreshToken });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: error.message });
  }
};

export const refreshAccessToken = async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken)
    return res.status(400).json({ message: "Refresh token is required" });

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const newAccessToken = jwt.sign(
      { id: decoded.id, name: decoded.name, role: decoded.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.status(200).json({ accessToken: newAccessToken });
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired refresh token" });
  }
};

export const logout = async (req, res) => {
  try {
    // Nếu bạn lưu refreshToken trong DB, bạn có thể xóa nó khỏi DB.
    const refreshToken = req.body.refreshToken; // Lấy refreshToken từ client
    if (!refreshToken) {
      return res.status(400).json({ message: "No refresh token provided" });
    }

    // Phản hồi thành công
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Email not found." });
    }

    const resetToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_RESET_SECRET,
      { expiresIn: "1h" }
    );

    // Tạo đường dẫn reset mật khẩu
    const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;

    // Gửi email cho người dùng với đường dẫn reset
    await sendEmail({
      to: email,
      subject: "Password Reset Request",
      text: `Bạn đã yêu cầu đặt lại mật khẩu . Link đặt lại mật khảu: ${resetUrl}`,
    });

    res
      .status(200)
      .json({ message: "Password reset link has been sent to your email." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { newPassword } = req.body;

    const decoded = jwt.verify(token, process.env.JWT_RESET_SECRET);
    const userId = decoded.userId;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password has been reset successfully." });
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired." });
    }
    res.status(500).json({ message: error.message });
  }
};
