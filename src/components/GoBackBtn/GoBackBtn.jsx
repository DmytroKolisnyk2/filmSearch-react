import React from "react";
import "./GoBackBtn.scss";
import { useNavigate } from "react-router-dom";

export default function GoBackBtn() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} type="button" className="go-back-btn">
      <span className="material-icons">arrow_back</span> Go Back
    </button>
  );
}
