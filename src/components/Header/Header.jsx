import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import { movies } from "../../services/routesPath.json";
import debounce from "lodash.debounce";

const Header = ({
  toggleShowBar,
  showBar,
  findMovieInput,
  setFindMovieInput,
  setOpenSettings,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      debouncedNavigate.cancel();
    };
  }, []);

  const debouncedNavigate = useMemo(() => debounce(() => navigate(movies), 500), [navigate]);

  const updateInput = ({ target }) => {
    setFindMovieInput(target.value);
    debouncedNavigate();
  };

  return (
    <header id="header" className="header">
      <input
        value={findMovieInput}
        onInput={updateInput}
        tabIndex="1"
        placeholder="Search movie..."
        className="header__search"
        type="text"
      />
      <i className="material-icons header__icon">send</i>
      <div className="header__controls-wrapper">
        <span onClick={() => setOpenSettings(true)} className="material-icons header__settings">
          settings
        </span>

        <button
          onClick={toggleShowBar}
          className={showBar ? "header__burger header__burger--open" : "header__burger"}
        >
          <span className="burger__part burger__part--1"></span>
          <span className="burger__part burger__part--2"></span>
          <span className="burger__part burger__part--3"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
