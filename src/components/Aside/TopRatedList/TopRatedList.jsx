import React from "react";
import poster from "../../../images/no-poster.png";
import { Link } from "react-router-dom";
import { movies } from "../../../services/routesPath.json";

export default function TopRatedList({ filmsData }) {
  return (
    <ul className="best-movies__list">
      {filmsData.map((item) => (
        <li key={item.id} className="">
          <Link className="best-movies__item" to={`${movies}/${item.id}`}>
            <div className="best-movies__img-wrapper">
              {item.poster_path ? (
                <img
                  width="350"
                  height="400"
                  className="card__img"
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                />
              ) : (
                <img width="350" height="400" alt="no-poster" className="card__img" src={poster} />
              )}
            </div>
            <div className="best-movies__text-wrapper">
              <h3 className="best-movies__headline">{item.title}</h3>
              <div className="best-movies__rating">
                <span className="rating__text">{item.vote_average}</span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
