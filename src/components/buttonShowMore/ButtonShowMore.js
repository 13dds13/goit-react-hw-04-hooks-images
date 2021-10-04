import React from "react";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";

const ButtonShowMore = ({ onShowMoreBtn, isLoading }) => {
  return (
    <button className="Button" type="button" onClick={onShowMoreBtn}>
      {isLoading ? (
        <Loader
          type="ThreeDots"
          color="#6186d6"
          height={200}
          width={200}
          timeout={5000}
        />
      ) : (
        <p>Load more</p>
      )}
    </button>
  );
};

ButtonShowMore.propTypes = {
  onShowMoreBtn: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default ButtonShowMore;
