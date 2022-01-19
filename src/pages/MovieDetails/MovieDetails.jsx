import React, { useEffect, useState } from "react";
import "./MovieDetails.scss";
import { useParams } from "react-router-dom";
import { pageRequest, videoRequest, similarRequest } from "../../services/movieAPI";

import SimilarFilms from "./SimilarFilms/SimilarFilms";
import Video from "./Video/Video";

import NoImgPoster from "../../images/no-poster.png";

export default function MovieDetails() {
  const [requestData, setRequestData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [video, setVideo] = useState(null);
  const [similar, setSimilar] = useState(null);

  const { filmId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    similarRequest(filmId).then(({ data }) => data.results.length && setSimilar(data.results));

    videoRequest(filmId).then(({ data }) => setVideo(data.results[0]?.key));

    pageRequest(filmId)
      .then(({ data }) => {
        setError("");
        setRequestData(data);
      })
      .catch(() => setError("Opps, something went wrong"))
      .finally(() => setIsLoading(false));
  }, [filmId]);

  return (
    requestData &&
    !isLoading && (
      <>
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
                <span className="background__year background__text">
                  {requestData.release_date}
                </span>
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
                    <i className="material-icons material-icons--1 material-icons--3">
                      playlist_add
                    </i>
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
        <p className="info__text">
          <span>Home page: </span>
          <a href={requestData.homepage} className="info__home-page-link">
            {requestData.homepage}
          </a>
          {requestData.homepage || "no information found"}
        </p>
        <p className="info__text">
          <span>Summary: </span>
          {requestData.overview || "no information found"}
        </p>
        <p className="info__text">
          <span>Trailer:</span>
        </p>
        <Video video={video} />

        <SimilarFilms similarList={similar} NoImgPoster={NoImgPoster} />
      </>
    )
  );
}
