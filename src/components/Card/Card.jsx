import React from "react";
import "./Card.scss";

import { Link } from "react-router-dom";
import { movies } from "../../services/routesPath.json";
import NoImgPoster from "../../images/no-poster.png";
import BtnBox from "../BtnBox/BtnBox";


export default function Card({ enableBtn, item ,imgWidth}) {
  return (
    <Link to={`${movies}/${item.id}/`}  height="500" className="card">
      <div className="card__img-wrapper">
        {item.poster_path ? (
          <img
            alt={item.title}
            width={imgWidth}
            height="500"
            className="card__img"
            src={`https://image.tmdb.org/t/p/w${imgWidth}${item.poster_path}`}
          />
        ) : (
          <img width="350" height="500" alt={item.title} className="card__img" src={NoImgPoster} />
        )}
      </div>
      <div className="card__menu-wrapper">
        <div data-tippy-content="Country" className="card__lang">
          {item.original_language}
        </div>
        {enableBtn && (
          <div className="card__menu">
            <BtnBox id={item.id} rating={item.vote_average} />
            <button data-tippy-content="Info" type="button" className="card-menu__btn">
              <i className="material-icons">info</i>
            </button>
          </div>
        )}
        <h2 className="card__headline">{item.title}</h2>
      </div>
    </Link>
  );
}
