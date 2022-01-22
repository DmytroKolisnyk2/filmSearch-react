import React from "react";
import NotFoundPicture from "../../images/404.png";
import { Link } from "react-router-dom";
import { home, movies } from "../../services/routesPath.json";
import "./NotFound.scss";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__img-wrapper">
        <img width="400" src={NotFoundPicture} alt="" className="not-found__img" />
      </div>
      <div className="not-found__text-wrapper">
        <h2 className="not-found__error">404</h2>
        <p className="not-found__text">Opps, it looks like this page flew into space</p>
       <div className="not-found__link-wrapper">
          <Link className="not-found__link" to={home}>
            Back to home <span className="material-icons">home</span>
          </Link>
          <Link className="not-found__link" to={movies}>
            Back to search <span className="material-icons">search</span>
          </Link>
       </div>
      </div>
    </section>
  );
}
