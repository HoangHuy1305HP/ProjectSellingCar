import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    place: { type: String, required: true },
    year: { type: Number, required: true },
    style: { type: String },
    energy: { type: String },
    seat: { type: Number },
    brand: { type: String },
    color: { type: String },
    mileage: { type: Number },
    image: { type: String }, // URL của hình ảnh
  },
  { timestamps: true }
);

const Car = mongoose.model("Car", carSchema);

export default Car;
