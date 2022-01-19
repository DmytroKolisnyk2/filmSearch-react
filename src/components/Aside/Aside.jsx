import React, { useState, useEffect } from "react";
import { popularRequest } from "../../services/movieAPI";
import "./Aside.scss";
import TopRatedList from "./TopRatedList/TopRatedList";

import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";
import ControlsList from "./ControlsList/ControlsList";

export default function Aside({ showBar, onClick }) {
  const [error, setError] = useState("");
  const [topRated, setTopRated] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    popularRequest()
      .then(({ data }) => {
        setTopRated(data.results);
        setError("");
      })
      .catch(() => setError("Top in your region not found"))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <aside className={showBar ? "bar bar--open" : "bar"}>
      <h2 className="bar__controls-headline bar__headline">Free movie</h2>
      <ControlsList />

      <h2 className="bar__movies-headline bar__headline">Top movies</h2>
      {error && <h2 className="bar__error">{error}</h2>}
      <TopRatedList onClick={onClick} filmsData={topRated} />
      {isLoading && <SpinnerLoader />}
    </aside>
  );
}
