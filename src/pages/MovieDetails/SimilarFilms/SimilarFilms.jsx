import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/src/tiny-slider.scss";
import sliderOptions from "../../../plugins/tiny-slider";

import { movies } from "../../../services/routesPath.json";

export default function SimilarFilms({ similarList, NoImgPoster }) {
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
              <Link
                draggable={false}
                to={`${movies}/${item.id}`}
                key={item.id}
                height="350"
                className="card"
              >
                <div className="card__img-wrapper">
                  {item.poster_path ? (
                    <img
                      alt={item.original_title}
                      width="350"
                      height="400"
                      className="card__img"
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    />
                  ) : (
                    <img
                      width="350"
                      height="400"
                      alt="no-poster"
                      className="card__img"
                      src={NoImgPoster}
                    />
                  )}
                </div>
                <div className="card__menu-wrapper">
                  <div data-tippy-content="Country" className="card__lang">
                    {item.original_language}
                  </div>
                  <h2 className="info__headline card__headline">{item.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </>
    )
  );
}
