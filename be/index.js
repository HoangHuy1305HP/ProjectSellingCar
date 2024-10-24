import express from "express";
import mongoose from "mongoose";
// import userRoutes from "./src/router/userRouter.js";
import morgan from "morgan";
import authRouter from "./src/router/authRouter.js";
import dotenv from "dotenv";
import imageRouter from "./src/router/imageRouter.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 2000;

dotenv.config();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Đặt chính xác miền frontend
    credentials: true, // Cho phép gửi cookie, session, hoặc token
  })
);
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
//api
app.use("/api/img", imageRouter);
// app.use("/api", userRoutes);
app.use("/auth", authRouter);

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
