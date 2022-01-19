import React, { useEffect, useState } from "react";
import "./MovieDetails.scss";
import { useParams } from "react-router-dom";
import { pageRequest, videoRequest, similarRequest } from "../../services/movieAPI";

import SimilarFilms from "./SimilarFilms/SimilarFilms";
import Video from "./Video/Video";
import TextInfo from "./TextInfo/TextInfo";
import MovieBackdrop from "./MovieBackdrop/MovieBackdrop";
import SpinnerLoader from "../../components/SpinnerLoader/SpinnerLoader";

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
      .catch(() => setError("Opps, we can`t find this film"))
      .finally(() => setIsLoading(false));
  }, [filmId]);
  return (
    <>
      {isLoading && <SpinnerLoader />}
      {error && <h2 className="main__error">{error}</h2>}
      {requestData && !isLoading && !error && (
        <>
          <MovieBackdrop requestData={requestData} />
          <TextInfo requestData={requestData} />
          <Video video={video} />
          <SimilarFilms similarList={similar} NoImgPoster={NoImgPoster} />
        </>
      )}
    </>
  );
}
