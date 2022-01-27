import React from "react";
import "./BtnBox.scss";
import { connect } from "react-redux";
import { addLike, deleteLike } from "../../redux/likes/likes-actions";
import { addWatchLater, deleteWatchLater } from "../../redux/watch-later/watch-later-actions";
import PropTypes from "prop-types";

function BtnBox({
  id,
  rating,
  enableInfo,
  likes,
  addLike,
  deleteLike,
  watchLater,
  deleteWatchLater,
  addWatchLater,
}) {
  const toggleLike = (event) => {
    event.preventDefault();
    likes.includes(id) ? deleteLike(id) : addLike(id);
  };
  const toggleWatchLater = (event) => {
    event.preventDefault();
    watchLater.includes(id) ? deleteWatchLater(id) : addWatchLater(id);
  };
  return (
    <>
      <span data-tippy-content="Rating" className="rating-bg__text">
        {rating}
      </span>

      <button
        data-tippy-content="Add to watch later"
        data-id={id}
        type="button"
        onClick={toggleWatchLater}
        className={`card-menu__btn card-menu__btn--watch-later ${
          watchLater.includes(id) && "card-menu__btn--later"
        }`}
      >
        <i className="material-icons material-icons--1 material-icons--3">playlist_add</i>
        <i className="material-icons material-icons--2 material-icons--4">playlist_add_check</i>
      </button>
      <button
        data-tippy-content="Like"
        onClick={toggleLike}
        data-id={id}
        type="button"
        className={`card-menu__btn card-menu__btn--like ${
          likes.includes(id) && "card-menu__btn--liked"
        }`}
      >
        <i className="material-icons material-icons--1 material-icons--3">favorite_border</i>
        <i className="material-icons material-icons--2 material-icons--4">favorite</i>
      </button>
      {enableInfo && (
        <button data-tippy-content="Info" type="button" className="card-menu__btn">
          <i className="material-icons">info</i>
        </button>
      )}
    </>
  );
}

const mapStateToProps = ({ likes, watchLater }) => ({
  likes: likes,
  watchLater: watchLater,
});

const mapDispatchToProps = (dispatch) => ({
  addLike: (id) => dispatch(addLike(id)),
  deleteLike: (id) => dispatch(deleteLike(id)),
  addWatchLater: (id) => dispatch(addWatchLater(id)),
  deleteWatchLater: (id) => dispatch(deleteWatchLater(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BtnBox);

BtnBox.propTypes = {
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  enableInfo: PropTypes.bool,
  likes: PropTypes.array.isRequired,
  watchLater: PropTypes.array.isRequired,
  addLike: PropTypes.func.isRequired,
  deleteLike: PropTypes.func.isRequired,
  deleteWatchLater: PropTypes.func.isRequired,
  addWatchLater: PropTypes.func.isRequired,
};
