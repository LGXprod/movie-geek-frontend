import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getQuiz from "../adapters/getQuiz";
import postRecommendations from "../adapters/postRecommendations";
import DefaultLayout from "../layouts/defaultLayout";
import Rating from "../components/rating";
import MovieModal from "../components/movieModal";

const Quiz = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState();
  const [movieRatings, setMovieRatings] = useState();
  const [isLoadingRecommendations, setIsLoadingRecommendations] = useState(false);

  useEffect(() => {
    (async () => {
      const movies = await getQuiz();
      const movieRatings = {};

      for (let { movieId } of movies) {
        movieRatings[movieId] = null;
      }

      setMovieRatings(movieRatings);
      setMovies(movies);
    })();
  }, []);

  useEffect(() => {
    if (movieRatings) {
      let isComplete = true;
      console.log("m", movieRatings)

      for (let movieId in movieRatings) {
        console.log(movieId)
        if (movieRatings[movieId] === null) {
          isComplete = false;
          break;
        }
      }

      console.log("c", isComplete)

      if (isComplete) {
        (async () => {
          setIsLoadingRecommendations(true);
          const movieRecommendations = await postRecommendations(movieRatings);
          setIsLoadingRecommendations(false);
          navigate("/recommendations", { state: movieRecommendations });
        })()
      }
    }
  }, [movieRatings]);

  return (
    <DefaultLayout>
      <div className="quiz">
        <h2>Please rate the movies below:</h2>
        {isLoadingRecommendations && <p>Loading recommendations...</p>}
        <div>
          {movies &&
            movies.map(({ movieId, title, genres }, i) => {
              return (
                <div key={i}>
                  <MovieModal title={title} genres={genres} />
                  <Rating
                    id={movieId}
                    ratings={movieRatings}
                    setRating={setMovieRatings}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Quiz;
