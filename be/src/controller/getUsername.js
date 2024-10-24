export const getUsername = (req, res) => {
  try {
    const username = req.user?.name; // Giả sử bạn lưu tên người dùng trong req.user

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    res.setHeader("Access-Control-Allow-Credentials", "true");

    if (username) {
      res.status(200).json({ name: username });
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    console.error("Error retrieving username:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
