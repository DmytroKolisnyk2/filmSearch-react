import React, { useState, useEffect } from "react";
import "./TrendingList.scss";
import { searchTrending } from "../../services/movieAPI";
import Slider from "../Slider/Slider";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";

export default function TrendingList() {
  const [requestData, setRequestData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    searchTrending()
      .then(({ data }) => {
        setError("");
        setRequestData(data.results);
      })
      .catch(() => setError("Opps, trending films not found"))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section className="trending">
      {error ? (
        <h2 className="main__error">{error}</h2>
      ) : (
        <>
          <h2 className="home__trending">Hmmm, maybe you have been finding this movies for ages:</h2>
          {isLoading && <SpinnerLoader />}
          {requestData.length > 0 && <Slider filmsList={requestData} />}
        </>
      )}
    </section>
  );
}
