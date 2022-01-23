import React, { useState, useEffect } from "react";
import { upcomingRequest } from "../../services/movieAPI";

import SpinnerLoader from "../../components/SpinnerLoader/SpinnerLoader";
import SearchResult from "../../components/SearchResult/SearchResult";

export default function ComingSoon() {
  const [requestData, setRequestData] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    upcomingRequest()
      .then(({ data }) => {
        setRequestData(data.results);
        data.results.length === 0 && setError("Coming soon films in your region not found");
      })
      .catch(() => setError("Opps, something went wrong"))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section className="coming-soon">
      <h2 className="main__headline">Coming soon movies</h2>

      {error && <h2 className="main__error">{error}</h2>}
      {isLoading && <SpinnerLoader />}
      <SearchResult requestData={requestData} />
    </section>
  );
}
