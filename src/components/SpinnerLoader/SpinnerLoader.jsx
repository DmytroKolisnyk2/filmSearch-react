import React from "react";
import Loader from "react-js-loader";
import './SpinnerLoader.scss'

export default function SpinnerLoader() {
  return <div className="loader-wrapper"><Loader bgColor={"grey"} type="bubble-scale" size={50} /></div>;
}
