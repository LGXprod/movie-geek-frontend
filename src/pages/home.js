import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import DefaultLayout from "../layouts/defaultLayout";

const Home = () => {
  let navigate = useNavigate();
  const goToQuiz = () => {
    navigate("/recommendation-quiz");
  };

  return (
    <DefaultLayout>
      <div className="movie-geek-info landing-section">
        <div>
          <div>
            <h1>MovieGeek</h1>
            <h2>Your AI film nerd friend</h2>
            <p>
              Tired of endlessly scrolling through Netflix, Disney Plus or any
              of the other dozen streaming services? We at Movie geek believe
              that movie-time should be relaxing time and as such have created a
              super advanced AI model to give you some amazing recommendations.
              Recommendations are not only based on the similarity of movies
              like other services but also by comparing the 0-5 star ratings you
              give compared to our 20 million plus users!
            </p>

            <p>
              Give our recommendations a try by clicking the button below, we
              are sure you will love it!
            </p>

            <div onClick={goToQuiz}>
              <h6>Get Started By Taking a Quick Recommendation Quiz</h6>
              <Button label="Take Quiz" />
            </div>
          </div>

          <div>
            <img alt="robot" src={require("../images/robot.png")} />
          </div>
        </div>
      </div>

      <div id="ai-tech" className="movie-geek-info ai-tech-section">
        <div>
          <h2>
            <span>State of the Art</span> AI Tech
          </h2>

          <div>
            <div>
              <img
                alt="network graph icon"
                src={require("../images/graph.png")}
              />
              <h4>Movie Graph Network</h4>
              <p>
                Movie Geek uses a graph database technology called Neo4j to
                generate some of our recommendations. This graph database
                enables us to connect our highly related data; such as our
                movies, genres and tags. More importantly, Neo4j in combination
                with the industry standard query language, Cypher, allows us to
                build our graph based algorithms (mainly our 2-hop ensemble
                algorithm). It also enables us to visualize the database through
                our DBMS and his and will continue to drive our database
                decisions.
              </p>
            </div>

            <div>
              <img
                alt="network graph icon"
                style={{ height: "225px" }}
                src={require("../images/latent-model.png")}
              />
              <h4>Latent Factor Model</h4>
              <p>
                Our Latent Factor Model took many hours to train and gives us an
                incredible edge in terms of our accuracy of predictions.
                Essentially, we took our huge database of user ratings,
                transformed it into a matrix of users and movies, and then the
                tricky part, used machine learning to predict the ratings of
                movies that each user hadn’t rated. Many companies, most notably
                Netflix, use this type of Collaborative filtering.
              </p>
            </div>

            <div>
              <img
                alt="network graph icon"
                src={require("../images/tensorflow.png")}
              />
              <h4>Movie Graph Network</h4>
              <p>
                The advanced Latent Factor AI model used to generate many of the
                recommendations we give to users, is powered by Google’s
                open-source Machine Learning library and framework; Tensorflow.
                Not only does it handle the matrix multiplication used in the
                Latent Factor Model, it also enables us to take advantage of our
                RTX 3060 to speed up training, as Tensorflow is GPU accelerated.
                Nerd talk behind us, essentially Tensorflow allows us to stand
                on the shoulders of giants, and utilize optimizers ML processes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="our-data" className="movie-geek-info stats-section">
        <div>
          <div className="stats">
            <div>
              <h3>100%</h3>
              <h4>Link Coverage</h4>
            </div>

            <div>
              <h2>20,000,000+</h2>
              <h4>User ratings</h4>
            </div>

            <div>
              <h3>27,278</h3>
              <h4>Movies</h4>
            </div>
          </div>

          <p>
            This dataset we used to create our database, algorithms and AI
            models, (ml-20m) describes 5-star rating and free-text tagging
            activity from [MovieLens](http://movielens.org), a movie
            recommendation service. It contains 20000263 ratings and 465564 tag
            applications across 27278 movies. These data were created by 138493
            users between January 09, 1995 and March 31, 2015. This dataset was
            generated on March 31, 2015, and updated on October 17, 2016 to
            update links.csv and add genome-* files. The Developers and Data
            Scientists of Movie Geek did further data cleaning and preprocessing
            so that it could empower our needs and give you the best
            recommendations. <br />
            <br /> The original dataset was created by researchers at the
            University of Minnesota and graciously made available to the public.
          </p>

          <div className="logos">
            <img alt="imdb logo" src={require("../images/imdb-logo.png")} />
            <img
              alt="imdb logo"
              src={require("../images/minnesota-uni-logo.png")}
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
