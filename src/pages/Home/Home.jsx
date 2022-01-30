import React from "react";
import HomeAstronaut from "../../images/home-astronaut.png";
import { Link } from "react-router-dom";
import { coming, nowPlaying, liked, watchLater } from "../../services/routesPath.json";
import "./Home.scss";
import TrendingList from "../../components/TrendingList/TrendingList";

const Home = () => {
  return (
    <section className="home">
      <div className="home__content-wrapper">
        <div className="home__img-wrapper">
          <img width="512" src={HomeAstronaut} alt="astronaut is looking" className="home__img" />
        </div>
        <div className="home__text-wrapper">
          <h2 className="home__error">Hello there</h2>
          <p className="home__text">You can find any movie or go to </p>
          <div className="home__link-wrapper">
            <Link className="home__link" to={nowPlaying}>
              Playing now <span className="material-icons">play_circle_outline</span>
            </Link>
            <Link className="home__link" to={coming}>
              Coming soon <span className="material-icons">date_range</span>
            </Link>
            <Link className="home__link" to={liked}>
              Liked movies <span className="material-icons">favorite_border</span>
            </Link>
            <Link className="home__link" to={watchLater}>
              Watch later <span className="material-icons">watch_later</span>
            </Link>
          </div>
        </div>
      </div>
      <TrendingList headline="Hmmm, maybe you have been finding this movies for ages:" />
    </section>
  );
};

export default Home;
