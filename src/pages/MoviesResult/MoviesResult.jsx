import React, { useState, useEffect } from "react";
import { queryRequest } from "../../services/movieAPI";
// import debounce from "lodash.debounce";

import MovieResultContent from "./MovieResultContent/MovieResultContent";
import SearchResult from "../../components/SearchResult/SearchResult";
// import debounce from "lodash.debounce";

export default function MoviesResult({ inputValue }) {
  const [requestData, setRequestData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (!inputValue) return;
    setPage(1);
    setRequestData([]);
    debouncedRequest(1);
  }, [inputValue]);

  useEffect(() => {
    if (page === 1 || isLoading) return;
    debouncedRequest(page).then(() =>
      window.scrollBy({
        top: 1260,
        behavior: "smooth",
      })
    );
  }, [page]);

  const debouncedRequest = async (pageParam) => {
    setShowBtn(false);
    setIsLoading(true);
    setError("");
    queryRequest(inputValue, pageParam)
      .then(({ data }) => {
        pageParam === 1
          ? setRequestData(data.results)
          : setRequestData([...requestData, ...data.results]);
        data.results.length === 0 && setError("No movies found");
        setShowBtn(data.results.length === 20);
      })
      .catch(() => setError("Opps, something went wrong"))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {requestData.length === 0 && !isLoading && !error && <MovieResultContent />}
      <section className="page-result">
        {error ? (
          <h2 className="main__error">{error}</h2>
        ) : (
          <>
            {requestData.length > 0 && <h2 className="main__headline">Search results</h2>}
            {!error && <SearchResult requestData={requestData} isLoading={isLoading} />}
            {showBtn && (
              <button className="load-more-btn" onClick={() => setPage(page + 1)} type="button">
                Load more
              </button>
            )}
          </>
        )}
      </section>
    </>
  );
}
