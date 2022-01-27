import React, { useEffect } from "react";
import NoImgPoster from "../../../images/no-poster.png";

import addTippy from "../../../plugins/tippy";
import BtnBox from "../../../components/BtnBox/BtnBox";

function MovieBackdrop({ requestData }) {
  useEffect(() => addTippy(), [requestData]);

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
                alt={requestData.title}
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
              <BtnBox rating={requestData.vote_average} id={requestData.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieBackdrop;
