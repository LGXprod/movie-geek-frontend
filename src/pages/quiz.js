import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getQuiz from "../adapters/getQuiz";
import postRecommendations from "../adapters/postRecommendations";
import DefaultLayout from "../layouts/defaultLayout";
import Rating from "../components/rating";
import MovieModal from "../components/movieModal";
import LoadingAnimation from "../images/loading-animation.svg";

const Quiz = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState();
  const [movieRatings, setMovieRatings] = useState();
  const [isLoadingRecommendations, setIsLoadingRecommendations] =
    useState(false);

  useEffect(() => {
    (async () => {
      const movies = await getQuiz();
      const movieRatings = {};

      console.log("movies", movies);

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
      console.log("m", movieRatings);

      for (let movieId in movieRatings) {
        console.log(movieId);
        if (movieRatings[movieId] === null) {
          isComplete = false;
          break;
        }
      }

      console.log("c", isComplete);

      if (isComplete) {
        (async () => {
          setIsLoadingRecommendations(true);
          const movieRecommendations = await postRecommendations(movieRatings);
          setIsLoadingRecommendations(false);
          navigate("/recommendations", { state: movieRecommendations });
        })();
      }
    }
  }, [movieRatings]);

  return (
    <DefaultLayout>
      <div className="quiz">
        {isLoadingRecommendations ? (
          <div className="loading">
            <img alt="loading animation" src={LoadingAnimation} />
            <p>Generating Our Recommendations</p>
          </div>
        ) : (
          <>
            <h2>Please rate the movies below:</h2>

            <div>
              {movies &&
                movies.map(({ movieId, title, genres, tags, imdbId, tmdbId }, i) => {
                  return (
                    <div key={i}>
                      <MovieModal
                        title={title}
                        genres={genres.join(", ")}
                        tags={tags.join(", ")}
                        imdbId={imdbId}
                        tmdbId={tmdbId}
                      />
                      <Rating
                        id={movieId}
                        ratings={movieRatings}
                        setRating={setMovieRatings}
                      />
                    </div>
                  );
                })}
            </div>
          </>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Quiz;
