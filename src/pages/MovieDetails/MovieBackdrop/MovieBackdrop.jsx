import React, {useEffect} from 'react';
import NoImgPoster from "../../../images/no-poster.png";

import addTippy from "../../../plugins/tippy";

export default function MovieBackdrop({ requestData }) {
  useEffect(() => addTippy(),[requestData])
  return (
    <div className="movie-info">
      <div
        className="info__background"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.45) 100%), url(https://image.tmdb.org/t/p/original${requestData.backdrop_path}) no-repeat center /cover`,
        }}
      >
        <div className="background__content-wrapper">
          <div className="background__img-wrapper">
            {requestData.poster_path ? (
              <img
                alt={requestData.original_title}
                width="350"
                height="400"
                className="background__img"
                src={`https://image.tmdb.org/t/p/original${requestData.poster_path}`}
              />
            ) : (
              <img
                width="350"
                height="400"
                alt="no-poster"
                className="background__img"
                src={NoImgPoster}
              />
            )}
          </div>
          <div className="background__text-wrapper">
            <span className="background__year background__text">{requestData.release_date}</span>
            <h2 className="background__headline background__text">{requestData.title}</h2>
            <p className="background__tagline background__text">
              Tagline: <span>{requestData.tagline}</span>
            </p>
            <p className="background__genre background__text">
              Genre:
              {requestData?.genres.map((item) => (
                <span key={item.id}>{item.name}</span>
              ))}
            </p>
            <div className="page__menu">
              <span data-tippy-content="Rating" className="rating-bg__text">
                {requestData.vote_average}
              </span>

              <button
                data-tippy-content="Add to watch later"
                data-action="watch-later"
                type="button"
                className="card-menu__btn card-menu__btn--watch-later {#if watchLater} card-menu__btn--later{/if}"
              >
                <i className="material-icons material-icons--1 material-icons--3">playlist_add</i>
                <i className="material-icons material-icons--2 material-icons--4">
                  playlist_add_check
                </i>
              </button>
              <button
                data-tippy-content="Like"
                data-action="like"
                type="button"
                className="card-menu__btn card-menu__btn--like {#if liked} card-menu__btn--liked{/if}"
              >
                <i className="material-icons material-icons--1 material-icons--3">
                  favorite_border
                </i>
                <i className="material-icons material-icons--2 material-icons--4">favorite</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
