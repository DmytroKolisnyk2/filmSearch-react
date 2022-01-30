import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./FavoriteMovies.scss";
import { pageRequest } from "../../services/movieAPI";
import SearchResult from "../../components/SearchResult/SearchResult";
import TrendingList from "../../components/TrendingList/TrendingList";

function FavoriteMovies({ favoriteMovies }) {
  const [requestData, setRequestData] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    Promise.all(favoriteMovies.map((element) => pageRequest(element).then(({ data }) => data)))
      .then((values) => setRequestData([...values]))
      .catch(() => setError("Opps, something went wrong"))
      .finally(() => setIsLoading(false));
  }, [favoriteMovies]);

  return (
    <section className="favorite">
      <h2 className="main__headline">Favorite movies</h2>
      {favoriteMovies.length === 0 && (
        <>
          <h2 className="main__error">Hmm, it looks like you haven't liked anything yet</h2>
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

const mapStateToProps = ({ likes }) => ({
  favoriteMovies: likes,
});

export default connect(mapStateToProps, null)(FavoriteMovies);
