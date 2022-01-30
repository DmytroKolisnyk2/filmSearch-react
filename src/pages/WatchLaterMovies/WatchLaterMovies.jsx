import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./WatchLaterNovies.scss";
import { pageRequest } from "../../services/movieAPI";
import SearchResult from "../../components/SearchResult/SearchResult";
import TrendingList from "../../components/TrendingList/TrendingList";

function WatchLaterMovies({ watchLaterMovies }) {
  const [requestData, setRequestData] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    Promise.all(watchLaterMovies.map((element) => pageRequest(element).then(({ data }) => data)))
      .then((values) => setRequestData([...values]))
      .catch(() => setError("Opps, something went wrong"))
      .finally(() => setIsLoading(false));
  }, [watchLaterMovies]);

  return (
    <section className="favorite">
      <h2 className="main__headline">Watch later movies</h2>
      {watchLaterMovies.length === 0 && (
        <>
          <h2 className="main__error">Hmm, it looks like you have watched all the films</h2>
          <TrendingList list headline="But what about this films?" />
        </>
      )}
      {error ? (
        <h2 className="main__error">{error}</h2>
      ) : (
        <SearchResult requestData={requestData} isLoading={isLoading} />
      )}
    </section>
  );
}

const mapStateToProps = ({ watchLater }) => ({
  watchLaterMovies: watchLater,
});

export default connect(mapStateToProps, null)(WatchLaterMovies);
