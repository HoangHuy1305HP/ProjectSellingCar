import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendEmail from "./ultis/sendEmail.js";
import crypto from "crypto";

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
      return res.status(400).send("Name and password are required");
    }

    const user = await User.findOne({ name });
    if (!user) {
      return res.status(404).send("Invalid credentials");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(404).send("Invalid credentials");
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
    return res
      .status(200)
      .json({ accessToken: accessToken, refreshToken: refreshToken });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: error.message });
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

// export const sendOtp = async (req, res) => {
//   const { email } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: "Email không tồn tại" });

//     const otp = crypto.randomInt(100000, 999999).toString();
//     user.resetOtp = otp;
//     user.resetOtpExpire = Date.now() + 10 * 60 * 1000;
//     await user.save();

//     await sendEmail(
//       email,
//       "Mã OTP khôi phục mật khẩu",
//       `Mã OTP của bạn là: ${otp}`
//     );
//     res.json({ message: "Đã gửi OTP về email của bạn" });
//   } catch (error) {
//     res.status(500).json({ message: "Lỗi khi gửi OTP", error: error.message });
//   }
// };

// export const verifyOtp = async (req, res) => {
//   const { email, otp } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     console.log("User found:", user);
//     console.log("Entered OTP:", otp);
//     console.log("Stored OTP:", user.resetOtp);
//     console.log("OTP Expire Time:", user.resetOtpExpire);
//     console.log("Current Time:", Date.now());
//     if (!user || user.resetOtp !== otp || user.resetOtpExpire < Date.now()) {
//       return res
//         .status(400)
//         .json({ message: "OTP không hợp lệ hoặc đã hết hạn" });
//     }

//     user.resetOtp = null;
//     user.resetOtpExpire = null;
//     await user.save();

//     res.json({ message: "Xác thực OTP thành công" });
//   } catch (error) {
//     res.status(500).json({ message: "Lỗi khi xác thực OTP", error });
//   }
// };
export const sendOtp = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "Email không tồn tại" });

    const otp = crypto.randomInt(100000, 999999).toString(); // Tạo mã OTP ngẫu nhiên
    user.resetOtp = otp; // Lưu mã OTP vào user
    user.resetOtpExpire = Date.now() + 10 * 60 * 1000; // Thiết lập thời gian hết hạn cho mã OTP
    await user.save(); // Lưu thay đổi

    await sendEmail(
      email,
      "Mã OTP khôi phục mật khẩu",
      `Mã OTP của bạn là: ${otp}`
    );
    res.json({ message: "Đã gửi OTP về email của bạn" });
  } catch (error) {
    console.error("Error sending OTP:", error); // Ghi lại lỗi vào console
    res.status(500).json({ message: "Lỗi khi gửi OTP", error: error.message });
  }
};

export const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Email không tồn tại" });
    }

    // Kiểm tra tính hợp lệ của OTP
    if (user.resetOtp !== otp || user.resetOtpExpire < Date.now()) {
      return res
        .status(400)
        .json({ message: "OTP không hợp lệ hoặc đã hết hạn" });
    }

    user.resetOtp = null;
    user.resetOtpExpire = null;
    await user.save();

    // Gán email vào session và lưu session
    req.session.email = email;
    req.session.save((err) => {
      if (err) {
        return res.status(500).json({ message: "Lỗi khi lưu session" });
      }
    });

    res.json({ message: "Xác thực OTP thành công" });
  } catch (error) {
    console.error("Error verifying OTP:", error); // Ghi lại lỗi vào console
    res
      .status(500)
      .json({ message: "Lỗi khi xác thực OTP", error: error.message });
  }
};

export const resetPassword = async (req, res) => {
  const email = req.session.email; // Lấy email từ session
  console.log(req.session.email);

  const { newPassword } = req.body; // Chỉ lấy newPassword
  if (!email) {
    return res
      .status(400)
      .json({ message: "Session không chứa email. Vui lòng thử lại." });
  }
  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "Người dùng không tồn tại" });

    // Băm mật khẩu mới
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword; // Đảm bảo hash mật khẩu
    await user.save();

    res.json({ message: "Đặt lại mật khẩu thành công" });
  } catch (error) {
    console.error("Lỗi khi đặt lại mật khẩu:", error); // In chi tiết lỗi ra console
    res
      .status(500)
      .json({ message: "Lỗi khi đặt lại mật khẩu", error: error.message });
  }
};
