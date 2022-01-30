import React, { useEffect } from "react";
import "./Slider.scss";
import { tns } from "tiny-slider/src/tiny-slider";
import Card from "../Card/Card";
import sliderOptions from "../../plugins/tiny-slider";
import PropTypes from "prop-types";
import "tiny-slider/src/tiny-slider.scss";


export default function Slider({ filmsList }) {
  useEffect(() => filmsList && tns(sliderOptions), [filmsList]);

  return (
    <div className="info__slider-wrapper">
      <ul className="info__custom-control">
        <li className="prev">
          <i className="material-icons">chevron_left</i>
        </li>
        <li className="next">
          <i className="material-icons">chevron_right</i>
        </li>
      </ul>
      <div className="info__slider">
        {filmsList.map((item) => (
          <Card key={item.id} item={item} imgWidth={300} />
        ))}
      </div>
    </div>
  );
}

Slider.propTypes = {
  filmsList: PropTypes.array.isRequired,
};
