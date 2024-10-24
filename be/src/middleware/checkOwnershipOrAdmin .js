import Post from "../model/postModel.js";
import User from "../model/userModel.js";

const checkOwnershipOrAdmin = (req, res, next) => {
  const { id } = req.params;
  const user = User.findOne(Post.userId);
  // Giả sử `Post` là mô hình bài post
  Post.findById(id, (err, post) => {
    if (err || !post)
      return res.status(404).json({ message: "Post not found" });

    // Kiểm tra xem người dùng có phải chủ sở hữu hoặc là admin không
    if (Post.userId.toString() !== user.id && user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "You are not allowed to perform this action" });
    }

    next();
  });
};
