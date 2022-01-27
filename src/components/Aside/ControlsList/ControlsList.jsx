import React from "react";
import { NavLink } from "react-router-dom";
import { coming, nowPlaying, liked, watchLater } from "../../../services/routesPath.json";
import { connect } from "react-redux";

function ControlsList({ onClick , likes, watchLaterList }) {
  return (
    <div onClick={onClick} className="controls__list">
      <NavLink
        to={nowPlaying}
        className={({ isActive }) =>
          isActive ? "controls__item controls__item--active" : "controls__item"
        }
      >
        <span className="controls__link">
          <i className="material-icons">play_circle_outline</i>
          Playing now
        </span>
        <span className="controls__counter">20</span>
      </NavLink>
      <NavLink
        to={coming}
        className={({ isActive }) =>
          isActive ? "controls__item controls__item--active" : "controls__item"
        }
      >
        <span className="controls__link">
          <i className="material-icons">date_range</i>
          Coming soon
        </span>
        <span className="controls__counter">20</span>
      </NavLink>
      <NavLink
        to={liked}
        className={({ isActive }) =>
          isActive ? "controls__item controls__item--active" : "controls__item"
        }
      >
        <span className="controls__link">
          <i className="material-icons">favorite_border</i>
          Favorite movies
        </span>
        <span className="controls__counter controls__counter--favorite">{likes.length}</span>
      </NavLink>
      <NavLink
        to={watchLater}
        className={({ isActive }) =>
          isActive ? "controls__item controls__item--active" : "controls__item"
        }
      >
        <span className="controls__link">
          <i className="material-icons">watch_later</i>
          Watch later
        </span>
        <span className="controls__counter controls__counter--watch-later">{watchLaterList.length}</span>
      </NavLink>
    </div>
  );
}

const mapStateToProps = ({ likes, watchLater }) => ({
  likes: likes,
  watchLaterList: watchLater,
});
export default connect(mapStateToProps, null)(ControlsList);