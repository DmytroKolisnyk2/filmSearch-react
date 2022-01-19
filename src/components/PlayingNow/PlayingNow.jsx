import React, { useState, useEffect } from "react";
import { playingNowRequest } from "../../services/movieAPI";

import SpinnerLoader from "../../components/SpinnerLoader/SpinnerLoader";
import SearchResult from "../../components/SearchResult/SearchResult";

export default function PlayingNow() {
  const [requestData, setRequestData] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    playingNowRequest()
      .then(({ data }) => {
        setRequestData(data.results);
        data.results.length === 0 && setError("Playing now films in your region not found");
      })
      .catch(() => setError("Opps, something went wrong"))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section className="coming-soon">
      <h2 className="main__healine">Playing now movies</h2>
      {error && <h2 className="main__error">{error}</h2>}
      {isLoading && <SpinnerLoader />}
      <SearchResult requestData={requestData} />
    </section>
  );
}
