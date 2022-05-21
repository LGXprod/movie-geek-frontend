import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div>
        <div>
          <Link to="/"><h3><span>M</span><span>G</span></h3></Link>
          <Link to="/#ai-tech">AI Tech</Link>
          <Link to="/#our-data">Our Data</Link>
          <Link to="/recommendation-quiz">Recommendation Quiz</Link>
        </div>

        <Link to="">View Saved</Link>
      </div>
    </div>
  )
}

export default Navbar;