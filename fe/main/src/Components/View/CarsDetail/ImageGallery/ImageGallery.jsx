import React, { useState } from "react";
import "./ImageGallery.css";

import c1 from "../../../../img/detail1.png";
import c2 from "../../../../img/detail2.png";
import c3 from "../../../../img/detail3.png";
import c4 from "../../../../img/detail4.png";
import c5 from "../../../../img/detail5.png";
import c6 from "../../../../img/detail6.png";

const images = [c1, c2, c3, c4, c5, c6];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="image-gallery">
      <div className="main-image">
        <img src={selectedImage} alt="Selected" />
      </div>
      <div className="image-thumbnails">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${selectedImage === image ? "selected" : ""}`}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
