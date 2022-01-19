import React from "react";

export default function TextInfo({ requestData }) {
  return (
    <>
      <p className="info__text">
        <span>Home page: </span>

        {requestData.homepage ? (
          <a
            rel="noreferrer"
            target="_blank"
            href={requestData.homepage}
            className="info__home-page-link"
          >
            {requestData.homepage}
          </a>
        ) : (
          <span style={{ fontWeight: "normal" }}>no information found</span>
        )}
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
