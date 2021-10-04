import React, { Component } from "react";
import PropTypes from "prop-types";

class Modal extends Component {
  onKeyDownEsc = (e) => {
    this.props.onModalClosing(e);
  };

  componentDidMount() {
    window.addEventListener("keydown", this.onKeyDownEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeyDownEsc);
  }

  render() {
    const { imageURL, onModalClosing } = this.props;
    return (
      <div className="Overlay" onClick={onModalClosing}>
        <div className="Modal">
          <img src={imageURL} alt="large" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onModalClosing: PropTypes.func,
  imageURL: PropTypes.string,
};

export default Modal;
