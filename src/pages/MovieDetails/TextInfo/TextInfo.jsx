import React from 'react';

export default function TextInfo({requestData}) {
  return (
    <>
      <p className="info__text">
        <span>Home page: </span>
        <a href={requestData.homepage} className="info__home-page-link">
          {requestData.homepage}
        </a>
        {requestData.homepage || "no information found"}
      </p>
      <p className="info__text">
        <span>Summary: </span>
        {requestData.overview || "no information found"}
      </p>
      <p className="info__text">
        <span>Trailer:</span>
      </p>
    </>
  );
}
