import React from "react";
import imdb_logo from "../images/imdb-logo.svg";
import tmdb_logo from "../images/tmdb-logo.svg";

const MovieModal = ({ title, genres, tags, recTypes, imdbId, tmdbId }) => {
  return (
    <div className="movie-modal">
      <h4>{title}</h4>
      <h5>Genres: {genres}</h5>
      <h5>Tags: {tags}</h5>
      {recTypes && (
        <div className="recommendation-tags-container">
          {recTypes.map((recType, i) => {
            return (
              <div key={i} className={`recommendation-tag ${recType}`}>
                <label>{recType.replaceAll("-", " ")}</label>
              </div>
            );
          })}
        </div>
      )}
      {imdbId && tmdbId && (
        <div className="movie-db-links">
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.imdb.com/title/tt${imdbId}`}
            >
              View on
            </a>
            <img alt="imdb logo" src={imdb_logo} />
          </div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.themoviedb.org/movie/${tmdbId}`}
            >
              View on
            </a>
            <img alt="tmdb logo" src={tmdb_logo} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieModal;
