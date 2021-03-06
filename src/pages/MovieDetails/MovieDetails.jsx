import React, { useEffect, useState } from "react";
import "./MovieDetails.scss";
import { useParams, useNavigate } from "react-router-dom";
import { pageRequest, videoRequest, similarRequest } from "../../services/movieAPI";


import SpinnerLoader from "../../components/SpinnerLoader/SpinnerLoader";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import MovieBackdrop from "./MovieBackdrop/MovieBackdrop";
import TextInfo from "./TextInfo/TextInfo";
import Video from "./Video/Video";
import SimilarFilms from "./SimilarFilms/SimilarFilms";

function MovieDetails() {
  const [requestData, setRequestData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [video, setVideo] = useState(null);
  const [similar, setSimilar] = useState(null);

  const navigate = useNavigate();
  const { filmId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    similarRequest(filmId).then(({ data }) => data.results.length && setSimilar(data.results));

    videoRequest(filmId).then(({ data }) => {
      setVideo(data.results[0]?.key);
    });

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
      {error && <h2 className="main__error">{error}</h2> && navigate("/not-found")}
      {requestData && !isLoading && !error && (
        <>
          <GoBackBtn />
          <MovieBackdrop  requestData={requestData} />
          <TextInfo requestData={requestData} />
          <Video video={video} />
          <SimilarFilms similarList={similar} />
        </>
      )}
    </>
  );
}

export default MovieDetails;
