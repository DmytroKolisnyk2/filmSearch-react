import React, { useState, useEffect, useMemo } from "react";
import { queryRequest } from "../../services/movieAPI";
import debounce from "lodash.debounce";

import SearchResult from "../../components/SearchResult/SearchResult";
import SpinnerLoader from "../../components/SpinnerLoader/SpinnerLoader";

export default function MoviesResult({ inputValue }) {
  const [requestData, setRequestData] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingBottom, setIsLoadingBottom] = useState(false);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);

  const debouncedRequest = useMemo(
    () =>
      debounce(() => {
        setError("");
        setShowBtn(false);
        queryRequest(inputValue, page)
          .then(({ data }) => {
            page === 1
              ? setRequestData(data.results)
              : setRequestData([...requestData, ...data.results]);
            setShowBtn(true);
            data.results.length === 0 && setError("No movies found");
            setShowBtn(data.results.length === 20);
            console.log(data.results);
          })
          .catch(() => setError("Opps, something went wrong"))
          .finally(() => {
            setIsLoading(false);
            setIsLoadingBottom(false);
          });
      }, 1000),
    [inputValue, page]
  );

  useEffect(() => {
    console.log(inputValue);
    if (!inputValue) return;
    setPage(1);
    setIsLoading(true);
    debouncedRequest();
  }, [inputValue]);

  useEffect(() => {
    console.log(inputValue);

    if (!inputValue) return;
    setIsLoadingBottom(true);
    const promise = debouncedRequest();
    console.log(promise);
  }, [page]);

  return (
    <section className="page-result">
      {isLoading && <SpinnerLoader />}
      {error && <h2 className="main__error">{error}</h2>}
      {!isLoading && !error && <SearchResult requestData={requestData} />}
      {isLoadingBottom && <SpinnerLoader />}

      {showBtn && (
        <button className="load-more-btn" onClick={() => setPage(page + 1)} type="button">
          Load more
        </button>
      )}
    </section>
  );
}
