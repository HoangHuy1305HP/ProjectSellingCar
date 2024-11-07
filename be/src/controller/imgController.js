import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  folder: "first",
  cloud_name: "dhjld49fz",
  api_key: "515217312762956",
  api_secret: "vi5h3L67X5bAkaWqHFJ7CYz_vJs",
});

export const uploadImage = (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: "Không có tệp được tải lên." });
  }
  const dataUrl = `data:${file.mimetype};base64,${file.buffer.toString(
    "base64"
  )}`;
  const fileName = file.originalname.split(".")[0];

  cloudinary.uploader.upload(
    dataUrl,
    {
      folder: "first",
      public_id: fileName,
      resource_type: "auto",
    },
    (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ error: "Lỗi khi tải ảnh lên Cloudinary", details: err });
      }
      if (result) {
        return res.json({
          message: "Tệp được tải lên thành công.",
          url: result.secure_url,
        });
      }
    }
  );
  // res.json({ message: "Tệp được tải lên thành công.", data: file });
};

export const uploadListImg = async (req, res) => {
  const listFile = req.files;

  const listResult = [];
  if (!listFile) {
    return res.status(400).json({ error: "Không có tệp được tải lên." });
  }
  for (const file of listFile) {
    const dataUrl = `data:${file.mimetype};base64,${file.buffer.toString(
      "base64"
    )}`;
    const fileName = file.originalname.split(".")[0];

    try {
      const result = await cloudinary.uploader.upload(dataUrl, {
        folder: "first",
        public_id: fileName,
        resource_type: "auto",
      });
      listResult.push(result);
      console.log(result.secure_url);
    } catch (err) {
      console.error("Error uploading to Cloudinary:", err);
    }
  }

  // Trả về kết quả sau khi xử lý xong
  res.json({ message: "Tệp được tải lên thành công.", listResult });
};
