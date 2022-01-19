import React from "react";

export default function ControlsList() {
  return (
    <ul className="controls__list">
      <li className="controls__item" data-action="playingNow">
        <span className="controls__link">
          <i className="material-icons">play_circle_outline</i>
          Playing now
        </span>
        <span className="controls__counter">20</span>
      </li>
      <li className="controls__item" data-action="upcoming">
        <span className="controls__link">
          <i className="material-icons">date_range</i>
          Coming soon
        </span>
        <span className="controls__counter">20</span>
      </li>
      <li className="controls__item" data-action="favorite">
        <span className="controls__link">
          <i className="material-icons">favorite_border</i>
          Favorite movies
        </span>
        <span className="controls__counter controls__counter--favorite">10</span>
      </li>
      <li className="controls__item" data-action="playlist">
        <span className="controls__link">
          <i className="material-icons">watch_later</i>
          Watch later
        </span>
        <span className="controls__counter controls__counter--watch-later">15</span>
      </li>
    </ul>
  );
}
