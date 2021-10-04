import React from "react";
import PropTypes from "prop-types";
import ButtonShowMore from "../buttonShowMore/ButtonShowMore";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, onShowMoreBtn, onImgClick, isLoading }) => {
  return (
    !!images.length && (
      <ul className="ImageGallery">
        <ImageGalleryItem images={images} onImgClick={onImgClick} />
        <ButtonShowMore onShowMoreBtn={onShowMoreBtn} isLoading={isLoading} />
      </ul>
    )
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default ImageGallery;
