import React from "react";
import Slider from "../../../components/Slider/Slider";

export default function SimilarFilms({ similarList }) {
  return (
    similarList && (
      <>
        <p className="info__text">
          <span>Similar films:</span>
        </p>
        <Slider filmsList={similarList} />
      </>
    )
  );
}
