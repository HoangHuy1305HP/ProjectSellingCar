import express from "express";
import mongoose from "mongoose";
// import userRoutes from "./src/router/userRouter.js";
import morgan from "morgan";
import authRouter from "./src/router/authRouter.js";
import carRouter from "./src/router/carRouter.js";
import dotenv from "dotenv";
import imageRouter from "./src/router/imageRouter.js";
import cors from "cors";
import session from "express-session";

const app = express();
const PORT = process.env.PORT || 2000;

dotenv.config();

app.use(express.json());
// Cấu hình session
app.use(
  session({
    secret: "xinchao", // Thay đổi giá trị này thành một chuỗi bí mật mạnh
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 10 * 60 * 1000 }, // Nếu bạn sử dụng HTTPS, đặt secure: true
  })
);
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
//api
app.use("/api/img", imageRouter);
// app.use("/api", userRoutes);
app.use("/auth", authRouter);
app.use("/product", carRouter);

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Connection error", error.message);
  });
