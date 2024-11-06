import Car from "../model/car.js";

export const addCar = async (req, res) => {
  const {
    name,
    price,
    place,
    year,
    style,
    energy,
    seat,
    brand,
    color,
    mileage,
    image,
  } = req.body;

  try {
    const newCar = new Car({
      name,
      price,
      place,
      year,
      style,
      energy,
      seat,
      brand,
      color,
      mileage,
      image,
    });
    await newCar.save();
    res.status(201).json(newCar); // Trả về xe mới đã thêm
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi thêm xe: " + error.message });
  }
};

export const getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi khi lấy danh sách xe: " + error.message });
  }
};

export const deleteCar = async (req, res) => {
  const { id } = req.params;

  try {
    await Car.findByIdAndDelete(id);
    res.status(200).json({ message: "Sản phẩm đã được xóa thành công" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi xóa xe: " + error.message });
  }
};
