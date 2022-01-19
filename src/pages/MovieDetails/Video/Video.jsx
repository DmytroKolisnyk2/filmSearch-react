import React from 'react';
import NoVideoPoster from "../../../images/no-video.png";


export default function Video({video}) {
  return (
    <div>
      {video ? (
        <iframe
          className="info__trailer"
          width="947"
          height="539"
          src={`https://www.youtube.com/embed/${video}?autoplay=0`}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="info__trailer info__trailer--no-video">
          <img width="350" height="500" alt="no-video" className="card__img" src={NoVideoPoster} />
        </div>
      )}
    </div>
  );
}
