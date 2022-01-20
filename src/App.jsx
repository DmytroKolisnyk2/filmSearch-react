import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import routesPath from "./services/routesPath.json";

import Home from "./pages/Home/Home";
import MoviesResult from "./pages/MoviesResult/MoviesResult";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import PlayingNow from "./components/PlayingNow/PlayingNow";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Aside from "./components/Aside/Aside";
import Header from "./components/Header/Header";
import Settings from "./components/Settings/Settings";

import "material-design-icons/iconfont/material-icons.css";
import "./styles/main.scss";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light-border.css";
import "tippy.js/animations/shift-away.css";

const App = () => {
  const [findMovieInput, setFindMovieInput] = useState("");
  const [showBar, setShowBar] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  const toggleShowBar = () => {
    setShowBar(!showBar);
  };

  return (
    <>
      <Aside onClick={toggleShowBar} showBar={showBar} />
      <div onClick={toggleShowBar} className="aside__overlay"></div>

      <main className="main">
        <Header
          setFindMovieInput={setFindMovieInput}
          findMovieInput={findMovieInput}
          showBar={showBar}
          toggleShowBar={toggleShowBar}
          setOpenSettings={setOpenSettings}
        />

        <Routes>
          <Route path={routesPath.home} element={<Home />} />
          <Route path={routesPath.movies} element={<MoviesResult inputValue={findMovieInput} />} />
          <Route path={routesPath.movieDetail} element={<MovieDetails />} />
          <Route path={routesPath.coming} element={<ComingSoon />} />
          <Route path={routesPath.nowPlaying} element={<PlayingNow />} />
        </Routes>
        {openSettings && <Settings closeSettings={setOpenSettings}/>}
      </main>
    </>
  );
};

export default App;
