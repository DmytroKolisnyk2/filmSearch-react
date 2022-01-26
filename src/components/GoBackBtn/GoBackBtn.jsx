import React from "react";
import "./GoBackBtn.scss";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function GoBackBtn({ additionalClass }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      type="button"
      className={`go-back-btn ${additionalClass || ""}`}
    >
      <span className="material-icons">arrow_back</span> Go Back
    </button>
  );
}

GoBackBtn.propTypes = {
  additionalClass: PropTypes.string,
};
