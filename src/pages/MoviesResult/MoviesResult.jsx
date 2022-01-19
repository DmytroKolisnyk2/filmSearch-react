import React, { useState, useEffect, useMemo } from "react";
import { queryRequest } from "../../services/movieAPI";
import debounce from "lodash.debounce";
import throttle from "lodash.throttle";

import SearchResult from "../../components/SearchResult/SearchResult";
import SpinnerLoader from "../../components/SpinnerLoader/SpinnerLoader";

export default function MoviesResult({ inputValue }) {
  const [requestData, setRequestData] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const debouncedRequest = useMemo(
    () =>
      throttle(
        () =>
          queryRequest(inputValue, page)
            .then(({ data }) => {
              console.log(data);
              setRequestData(data.results);
              data.results.length === 0 && setError("No movies found");
            })
            .catch(() => setError("Opps, something went wrong"))
            .finally(() => setIsLoading(false)),
        1000
      ),
    [inputValue, page]
  );

  useEffect(() => {
    if (!inputValue) return;
    setIsLoading(true);
    setError("");
    debouncedRequest();
  }, [inputValue, page]);

  return (
    <section className="page-result">
      {isLoading && <SpinnerLoader />}
      {error && <h2 className="main__error">{error}</h2>}
      <SearchResult requestData={requestData} />
    </section>
  );
}
