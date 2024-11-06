import mongoose from "mongoose";
// import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    phone: {
      type: String,
      required: true,
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    resetOtp: { type: String }, // Thêm trường resetOtp
    resetOtpExpire: { type: Date }, // Thêm trường resetOtpExpire
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  { versionKey: false }
);
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

const User = mongoose.model("User", userSchema);

export default User;
