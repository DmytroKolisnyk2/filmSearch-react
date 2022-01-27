import React, { useEffect } from "react";

import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/src/tiny-slider.scss";
import Card from "../../../components/Card/Card";
import sliderOptions from "../../../plugins/tiny-slider";


export default function SimilarFilms({ similarList}) {
  useEffect(() => similarList && tns(sliderOptions), [similarList]);
  return (
    similarList && (
      <>
        <p className="info__text">
          <span>Similar films:</span>
        </p>
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
            {similarList.map((item) => (
              <Card key={item.id} item={item} imgWidth={300}/>
            ))}
          </div>
        </div>
      </>
    )
  );
}
