import React from "react";

const Header = () => {
  return (
    <header id="header" className="header">
      <input tabIndex="1" placeholder="Search movie..." className="header__search" type="text" />
      <i className="material-icons header__icon">send</i>
      <div className="header__controls-wrapper">
        <span className="material-icons header__settings">settings</span>

        <button className="header__burger">
          <span className="burger__part burger__part--1"></span>
          <span className="burger__part burger__part--2"></span>
          <span className="burger__part burger__part--3"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
