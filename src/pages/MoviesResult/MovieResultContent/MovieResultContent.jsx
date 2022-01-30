import React from "react";
import "./MovieResultContent.scss";
import movieResultImg from "../../../images/search-movies.png";
// import GoBackBtn from "../../../components/GoBackBtn/GoBackBtn";

const MovieResultContent = () => {
  return (
    <section className="movie-result">
      {/* <GoBackBtn additionalClass="search-result__back-btn" /> */}
      <div className="movie-result__text-wrapper">
        <h2 className="main__headline">Try to find a movie</h2>
      </div>
      <div className="movie-result__img-wrapper">
        <img className="movie-result__img" src={movieResultImg} alt="astronaut with planet" />
      </div>
    </section>
  );
};

export default MovieResultContent;
