import React, { useState, useEffect, useMemo } from "react";
import { queryRequest } from "../../services/movieAPI";
import debounce from "lodash.debounce";

import SearchResult from "../../components/SearchResult/SearchResult";
import SpinnerLoader from "../../components/SpinnerLoader/SpinnerLoader";

export default function MoviesResult({ inputValue}) {
  const [requestData, setRequestData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingBottom, setIsLoadingBottom] = useState(false);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);

  const debouncedRequest =
    // = useMemo(() =>
    //   debounce(
    async (pageParam) => {
      setShowBtn(false);
      setError("");
      console.log(inputValue, " : ", pageParam);
      console.log("pageparam " + pageParam);
      queryRequest(inputValue, pageParam)
        .then(({ data }) => {
          pageParam === 1
            ? setRequestData(data.results)
            : setRequestData([...requestData, ...data.results]);
          data.results.length === 0 && setError("No movies found");
          setShowBtn(data.results.length === 20);
        })
        .catch(() => setError("Opps, something went wrong"))
        .finally(() => {
          setIsLoading(false);
          setIsLoadingBottom(false);
        });
    };
  // , 1000)
  // , [inputValue, page]);

  useEffect(() => {
    if (!inputValue) return;
    setPage(1);
    setRequestData([]);
    setIsLoading(true);
    debouncedRequest(1);
  }, [inputValue]);

  useEffect(() => {
    if (page === 1 || isLoading) return;
    setIsLoadingBottom(true);
    console.log("page useefect");
    debouncedRequest(page).then(() =>
      window.scrollBy({
        top: 1260,
        behavior: "smooth",
      })
    );
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
