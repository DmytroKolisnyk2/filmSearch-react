import React, { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import routesPath from "./services/routesPath.json";

import { setLocalStorage } from "./services/setLocalStorage";

import "./styles/main.scss";
import "material-design-icons/iconfont/material-icons.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light-border.css";
import "tippy.js/animations/shift-away.css";

import LoaderModal from "./components/LoaderModal/LoaderModal";
import Header from "./components/Header/Header";
import ScrollTopArrow from "./components/ScrollTopArrow/ScrollTopArrow";

const Home = lazy(() => import("./pages/Home/Home" /* webpackChunkName: 'Home' */));
const MoviesResult = lazy(() =>
  import("./pages/MoviesResult/MoviesResult" /* webpackChunkName: 'MoviesResult' */)
);
const MovieDetails = lazy(() =>
  import("./pages/MovieDetails/MovieDetails" /* webpackChunkName: 'MovieDetails' */)
);
const ComingSoon = lazy(() =>
  import("./pages/ComingSoon/ComingSoon" /* webpackChunkName: 'ComingSoon' */)
);
const PlayingNow = lazy(() =>
  import("./pages/PlayingNow/PlayingNow" /* webpackChunkName: 'PlayingNow' */)
);
const Aside = lazy(() => import("./components/Aside/Aside" /* webpackChunkName: 'Aside' */));
const Settings = lazy(() =>
  import("./components/Settings/Settings" /* webpackChunkName: 'Settings' */)
);
const NotFound = lazy(() =>
  import("./pages/NotFound/NotFound" /* webpackChunkName: 'NotFound' */)
);
const FavoriteMovies = lazy(() =>
  import("./pages/FavoriteMovies/FavoriteMovies" /* webpackChunkName: 'FavoriteMovies' */)
);
const WatchLaterMovies = lazy(() =>
  import("./pages/WatchLaterMovies/WatchLaterMovies" /* webpackChunkName: 'WatchLaterMovies' */)
);

const App = () => {
  const [findMovieInput, setFindMovieInput] = useState("");
  const [showBar, setShowBar] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  const toggleShowBar = () => {
    setShowBar(!showBar);
  };

  useEffect(() => {
    setLocalStorage();
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
            <Route path={routesPath.liked} element={<FavoriteMovies />} />
            <Route path={routesPath.watchLater} element={<WatchLaterMovies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {openSettings && <Settings closeSettings={setOpenSettings} />}
        </main>
        <ScrollTopArrow bgColor="var(--aside-bg)" color="var(--headline-white)" />
      </Suspense>
    </>
  );
};

export default App;
