import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { home, coming, nowPlaying, liked, watchLater } from "../../../services/routesPath.json";
import { connect } from "react-redux";
import SpinnerLoader from "../../SpinnerLoader/SpinnerLoader";
import { playingNowRequest, upcomingRequest } from "../../../services/movieAPI";
import { getLiked } from "../../../redux/likes/likes-selectors";
import { getWatchLater } from "../../../redux/watch-later/watch-later-selectors";

function ControlsList({ onClick, likes, watchLaterList }) {
  const [playingNowData, setPlayingNowData] = useState([]);
  const [comingSoonData, setComingSoonData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      playingNowRequest().then(({ data }) => data.results),
      upcomingRequest().then(({ data }) => data.results),
    ])
      .then((data) => {
        setPlayingNowData(data[0].length);
        setComingSoonData(data[1].length);
      })
      .catch(() => {
        setPlayingNowData(0);
        setComingSoonData(0);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div onClick={onClick} className="controls__list">
      {isLoading ? (
        <SpinnerLoader />
      ) : (
        <>
          <NavLink
            to={home}
            className={({ isActive }) =>
              isActive ? "controls__item controls__item--active" : "controls__item"
            }
          >
            <span className="controls__link">
              <i className="material-icons">home</i>
              Sweet home
            </span>
            <span className="controls__counter">^_^</span>
          </NavLink>
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
            <span className="controls__counter">{playingNowData}</span>
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
            <span className="controls__counter">{comingSoonData}</span>
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
            <span className="controls__counter controls__counter--watch-later">
              {watchLaterList.length}
            </span>
          </NavLink>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  likes: getLiked(state),
  watchLaterList: getWatchLater(state),
});
export default connect(mapStateToProps, null)(ControlsList);
