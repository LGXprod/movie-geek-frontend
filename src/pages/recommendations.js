import React from "react";
import { useLocation } from "react-router-dom";
import DefaultLayout from "../layouts/defaultLayout";
import MovieModal from "../components/movieModal";

const Recommendations = () => {
  const { state } = useLocation();
  const movieRecommendations = state;

  return (
    <DefaultLayout>
      <div className="movie-recommendations">
        <h1>Here's What We Recommend</h1>

        <div>
          {movieRecommendations &&
            movieRecommendations.map(({ title, genres }, i) => {
              return (
                <MovieModal title={title} genres={genres} />
              );
            })}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Recommendations;
