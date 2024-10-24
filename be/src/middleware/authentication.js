import jwt from "jsonwebtoken";

export const authentication = async (req, res, next) => {
  try {
    const authHead = req.headers.authorization;

    console.log("Authorization header:", authHead);

    const token = authHead && authHead.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      name: decoded.name,
      id: decoded.id,
      role: decoded.role,
    };

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired." });
    }
    if (error.name === "JsonWebTokenError") {
      return res.status(403).json({ message: "Invalid token." });
    }

    return res.status(500).json({ message: "Authentication failed." });
  }
};
