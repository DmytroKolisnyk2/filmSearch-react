import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {movies} from '../../services/routesPath.json'

import NoImgPoster from "../../images/no-poster.png";
import addTippy from "../../plugins/tippy";

export default function SearchResult({ requestData }) {
  useEffect(() => requestData.length > 0 && addTippy(), [requestData]);

  return (
    requestData.length > 0 && (
      <div className="search-result__card-container">
        {requestData.map((item) => (
          <Link to={`${movies}/${item.id}/`} key={item.id} height="500" className="card">
            <div className="card__img-wrapper">
              {item.poster_path ? (
                <img
                  alt={item.title}
                  width="350"
                  height="500"
                  className="card__img"
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                />
              ) : (
                <img
                  width="350"
                  height="500"
                  alt={item.title}
                  className="card__img"
                  src={NoImgPoster}
                />
              )}
            </div>
            <div className="card__menu-wrapper">
              <div data-tippy-content="Country" className="card__lang">
                {item.original_language}
              </div>
              <div className="card__menu">
                <span
                  data-tippy-content="Rating"
                  type="button"
                  className="card-menu__btn card-menu__rating"
                >
                  {item.vote_average}
                </span>
                <button
                  data-tippy-content="Add to watch later"
                  data-action="watch-later"
                  type="button"
                  className="card-menu__btn card-menu__btn--watch-later {#if item.watchLater}card-menu__btn--later{/if}"
                >
                  <i className="material-icons material-icons--1">playlist_add</i>
                  <i className="material-icons material-icons--2">playlist_add_check</i>
                </button>
                <button
                  data-tippy-content="Like"
                  data-action="like"
                  type="button"
                  className="card-menu__btn card-menu__btn--like {#if item.liked}card-menu__btn--liked{/if}"
                >
                  <i className="material-icons material-icons--1">favorite_border</i>
                  <i className="material-icons material-icons--2">favorite</i>
                </button>
                <button data-tippy-content="Info" type="button" className="card-menu__btn">
                  <i className="material-icons">info</i>
                </button>
              </div>
              <h2 className="card__headline">{item.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    )
  );
}
