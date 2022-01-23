import React from "react";
import ContentLoader from "react-content-loader";
import "./ContentLoader.scss";
import PropTypes from "prop-types";

export default function LoaderPart({ count }) {
  const arrayOfLoaders = [...Array(count).keys()];
  return (
    <>
      {arrayOfLoaders.map((item) => (
        <ContentLoader
          foregroundColor="#cac0c0"
          viewBox="0 0 720 1080"
          speed={1}
          key={item}
          className="content-loader__part"
        >
          <rect x="0" y="0" rx="2" ry="2" width="720" height="1080" />
        </ContentLoader>
      ))}
    </>
  );
}

LoaderPart.defaultProps = {
  count: 6,
};

LoaderPart.propTypes = {
  count: PropTypes.number,
};
