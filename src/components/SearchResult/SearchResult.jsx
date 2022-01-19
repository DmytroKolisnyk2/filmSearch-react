import React from "react";

export default function SearchResult() {
  return (
    <div className="card">
      <div className="card__img-wrapper">
        <img
          width="350"
          className="card__img"
          src="https://www.megacritic.ru/media/reviews/photos/thumbnail/640x640s/2e/0e/bc/843650-22-1553011940.jpg"
        />
      </div>
      <div className="card__menu-wrapper">
        <div className="card__menu">
          <span type="button" className="card-menu__btn card-menu__rating">
            9.8
          </span>
          <button type="button" className="card-menu__btn">
            <i className="material-icons">playlist_add</i>
          </button>
          <button type="button" className="card-menu__btn">
            <i className="material-icons">favorite</i>
          </button>
          <button type="button" className="card-menu__btn">
            <i className="material-icons">info</i>
          </button>
        </div>
      </div>
    </div>
  );
}
