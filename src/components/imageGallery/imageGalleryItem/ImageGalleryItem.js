import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ images, onImgClick }) => {
  return images.map((img) => (
    <li key={img.webformatURL} className="ImageGalleryItem">
      <img
        src={img.webformatURL}
        alt={img.tags}
        className="ImageGalleryItem-image"
        onClick={() => onImgClick(img.largeImageURL)}
      />
    </li>
  ));
};

ImageGalleryItem.propTypes = {
  onImgClick: PropTypes.func,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};

export default ImageGalleryItem;
