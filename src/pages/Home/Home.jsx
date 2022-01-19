import React from "react";
import SearchResult from "../../components/SearchResult/SearchResult";

const Home = () => {
  return (
    <>
      <section className="page-result">
        <div className="search-result__card-container">
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
        </div>
      </section>

      <section className="search-result">
        <div className="search-result__card-container"></div>
      </section>
      {/* <a href="#header" className="main__arrow">
          <i className="material-icons">expand_less</i>
        </a> */}
    </>
  );
};

export default Home;
