import React, { useState, useEffect } from "react";
import getQuiz from "../adapters/getQuiz";
import DefaultLayout from "../layouts/defaultLayout";
import Rating from "../components/rating";
import MovieModal from "../components/movieModal";

const Quiz = () => {
  const [movies, setMovies] = useState();
  const [movieRatings, setMovieRatings] = useState();

  useEffect(() => {
    (async () => {
      const movies = await getQuiz();
      const movieRatings = {};

      for (let {movieId} of movies) {
        movieRatings[movieId] = null;
      }

      setMovieRatings(movieRatings);
      setMovies(movies);
    })();
  }, []);

  return (
    <DefaultLayout>
      <div className="quiz">
        <h2>Please rate the movies below:</h2>
        <div>
          {movies &&
            movies.map(({ movieId, title, genres }) => {
              return (<div>
                <MovieModal title={title} genres={genres} />
                <Rating id={movieId} rating={movieRatings} setRating={setMovieRatings} />
              </div>);
            })}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Quiz;
