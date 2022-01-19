import React from "react";
import { Routes, Route } from "react-router-dom";
import routesPath from "./services/routesPath.json";

import Home from "./pages/Home/Home";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Aside from "./components/Aside/Aside";
import Header from "./components/Header/Header";

import "material-design-icons/iconfont/material-icons.css";
import "./styles/main.scss";

const App = () => {
  return (
    <>
      <Aside />
      <div className="aside__overlay"></div>

      <main className="main">
        <Header />

        <Routes>
          <Route path={routesPath.home} element={<Home />} />
          <Route path={routesPath.movieDetail} element={<MovieDetails />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
