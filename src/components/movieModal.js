import React from "react";

const MovieModal = ({ title, genres }) => {
  return (
    <div className="movie-modal">
      <h4>{title}</h4>
      <h4>Genres: {genres}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lorem quis elit volutpat, sed consequat diam eleifend. Nam
        laoreet felis commodo dictum volutpat. Etiam sit amet mauris vel metus
        luctus eleifend a vel lorem.
      </p>
    </div>
  );
};

export default MovieModal;