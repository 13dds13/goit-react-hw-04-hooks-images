import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Modal = ({ onModalClosing, imageURL }) => {
  const onKeyDownEsc = (e) => {
    onModalClosing(e);
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDownEsc);
    return () => {
      window.removeEventListener("keydown", onKeyDownEsc);
    };
  });

  return (
    <div className="Overlay" onClick={onModalClosing}>
      <div className="Modal">
        <img src={imageURL} alt="large" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onModalClosing: PropTypes.func,
  imageURL: PropTypes.string,
};

export default Modal;
