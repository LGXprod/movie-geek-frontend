import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import DefaultLayout from "../layouts/defaultLayout";

const Home = () => {
  let navigate = useNavigate();
  const goToQuiz = () => {
    navigate("/recommendation-quiz")
  }

  return (
    <DefaultLayout>
      <div className="movie-geek-info landing-section">
        <div>
          <div>
            <h1>MovieGeek</h1>
            <h2>Your AI film nerd friend</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lorem quis elit volutpat, sed consequat diam
              eleifend. Nam laoreet felis commodo dictum volutpat. Etiam sit
              amet mauris vel metus luctus eleifend a vel lorem. Sed ac posuere
              tortor, sed mollis sapien. Suspendisse ultricies tempus sem, vel
              luctus justo mollis vel. Vivamus gravida fringilla eros eget
              elementum. Duis ullamcorper enim ac arcu ullamcorper, sit amet
              mattis eros porta. Fusce sit amet nunc sed massa blandit dictum.
              Mauris non enim nisi. Donec nec consectetur urna. Proin faucibus
              mattis augue, eget luctus lacus ornare vel. Sed nibh lectus,
              dignissim sit amet turpis ac, scelerisque luctus tortor. Nam
              finibus, ante tempus pulvinar laoreet, tortor mi efficitur odio,
              in mattis turpis elit ac augue.
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

      <div className="movie-geek-info ai-tech-section">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lorem quis elit volutpat, sed consequat
                diam eleifend. Nam laoreet felis commodo dictum volutpat. Etiam
                sit amet mauris vel metus luctus eleifend a vel lorem. Sed ac
                posuere tortor, sed mollis sapien. Suspendisse ultricies tempus
                sem, vel luctus justo mollis vel. Vivamus gravida fringilla eros
                eget elementum. Duis ullamcorper enim ac arcu ullamcorper, sit
                amet mattis eros porta. Fusce sit amet nunc sed massa blandit
                dictum.
              </p>
            </div>

            <div>
              <img
                alt="network graph icon"
                style={{ height: "225px" }}
                src={require("../images/latent-model.png")}
              />
              <h4>Latent Feature Model</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lorem quis elit volutpat, sed consequat
                diam eleifend. Nam laoreet felis commodo dictum volutpat. Etiam
                sit amet mauris vel metus luctus eleifend a vel lorem. Sed ac
                posuere tortor, sed mollis sapien. Suspendisse ultricies tempus
                sem, vel luctus justo mollis vel. Vivamus gravida fringilla eros
                eget elementum. Duis ullamcorper enim ac arcu ullamcorper, sit
                amet mattis eros porta. Fusce sit amet nunc sed massa blandit
                dictum.
              </p>
            </div>

            <div>
              <img
                alt="network graph icon"
                src={require("../images/tensorflow.png")}
              />
              <h4>Movie Graph Network</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lorem quis elit volutpat, sed consequat
                diam eleifend. Nam laoreet felis commodo dictum volutpat. Etiam
                sit amet mauris vel metus luctus eleifend a vel lorem. Sed ac
                posuere tortor, sed mollis sapien. Suspendisse ultricies tempus
                sem, vel luctus justo mollis vel. Vivamus gravida fringilla eros
                eget elementum. Duis ullamcorper enim ac arcu ullamcorper, sit
                amet mattis eros porta. Fusce sit amet nunc sed massa blandit
                dictum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-geek-info stats-section">
        <div>
          <div className="stats">
            <div>
              <h3>XX%</h3>
              <h4>Accuracy Statistic</h4>
            </div>

            <div>
              <h2>20,000,000</h2>
              <h4>User ratings</h4>
            </div>

            <div>
              <h3>27,278</h3>
              <h4>Movies</h4>
            </div>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lorem quis elit volutpat, sed consequat diam eleifend. Nam
            laoreet felis commodo dictum volutpat. Etiam sit amet mauris vel
            metus luctus eleifend a vel lorem. Sed ac posuere tortor, sed mollis
            sapien. Suspendisse ultricies tempus sem, vel luctus justo mollis
            vel. Vivamus gravida fringilla eros eget elementum. Duis ullamcorper
            enim ac arcu ullamcorper, sit amet mattis eros porta. Fusce sit amet
            nunc sed massa blandit dictum. Mauris non enim nisi. Donec nec
            consectetur urna. Proin faucibus mattis augue, eget luctus lacus
            ornare vel. Sed nibh lectus, dignissim sit amet turpis ac,
            scelerisque luctus tortor. Nam finibus, ante tempus pulvinar
            laoreet, tortor mi efficitur odio, in mattis turpis elit ac augue.
            Aliquam sed ligula iaculis sem molestie auctor. Praesent placerat
            fringilla lorem, et euismod libero blandit vel. Pellentesque
            posuere, lectus et interdum finibus, odio ante vehicula lectus, id
            scelerisque turpis massa eget orci. Duis at est pharetra, lacinia
            enim vel, gravida metus. Aliquam ut dui scelerisque, consectetur
            elit non, sollicitudin mi. Suspendisse ullamcorper vestibulum erat,
            a lobortis lorem congue id. Suspendisse eu varius tellus.
            Suspendisse sed vulputate ante, vitae condimentum sapien. Vestibulum
            id lorem fringilla, tempus nibh eget, maximus sapien. Nulla
            consequat ornare arcu, quis tempor lorem. Nam ac nulla sodales orci
            ultrices cursus id et augue. Sed nec diam vitae ligula porttitor
            condimentum. In vitae tincidunt tortor. Praesent eu justo libero. In
            iaculis, odio id porta sagittis, dui nisl blandit nunc, in congue
            nisl lectus quis erat. In sagittis enim bibendum ante blandit, in
            aliquam neque pharetra.
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

      <div className="movie-geek-info">
        <div>
          <h2>The Team</h2>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
