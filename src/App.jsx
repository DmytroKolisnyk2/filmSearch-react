import React, { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import routesPath from "./services/routesPath.json";

import { changeAxiosRegion, changeAxiosLanguage } from "./services/movieAPI";
import { changeTheme } from "./plugins/changeTheme";

import "./styles/main.scss";
import "material-design-icons/iconfont/material-icons.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light-border.css";
import "tippy.js/animations/shift-away.css";

import LoaderModal from "./components/LoaderModal/LoaderModal";
import NotFound from "./pages/NotFound/NotFound";
import MoviesResult from "./pages/MoviesResult/MoviesResult";
import Header from "./components/Header/Header";

const Home = lazy(() => import("./pages/Home/Home" /* webpackChunkName: 'Home' */));
const MovieDetails = lazy(() =>
  import("./pages/MovieDetails/MovieDetails" /* webpackChunkName: 'MovieDetails' */)
);
const ComingSoon = lazy(() =>
  import("./pages/ComingSoon/ComingSoon" /* webpackChunkName: 'ComingSoon' */)
);
const PlayingNow = lazy(() => import("./pages/PlayingNow/PlayingNow" /* webpackChunkName: 'PlayingNow' */));
const Aside = lazy(() => import("./components/Aside/Aside" /* webpackChunkName: 'Aside' */));
const Settings = lazy(() => import("./components/Settings/Settings" /* webpackChunkName: 'Settings' */));

const App = () => {
  const [findMovieInput, setFindMovieInput] = useState("");
  const [showBar, setShowBar] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  const toggleShowBar = () => {
    setShowBar(!showBar);
  };

  useEffect(() => {
    console.log("Оновка");
    changeTheme(localStorage.getItem("find-film-app_theme") || "Brown theme");
    changeAxiosLanguage(localStorage.getItem("find-film-app_language") || "en");
    changeAxiosRegion(localStorage.getItem("find-film-app_region") || "US");
  }, []);

  return (
    <>
      <Suspense fallback={<LoaderModal />}>
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
            <Route
              path={routesPath.movies}
              element={<MoviesResult inputValue={findMovieInput} />}
            />
            <Route path={routesPath.movieDetail} element={<MovieDetails />} />
            <Route path={routesPath.coming} element={<ComingSoon />} />
            <Route path={routesPath.nowPlaying} element={<PlayingNow />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {openSettings && <Settings closeSettings={setOpenSettings} />}
        </main>
      </Suspense>
    </>
  );
};

export default App;
