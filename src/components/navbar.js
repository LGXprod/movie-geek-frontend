import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div>
        <div>
          <Link to="/"><h3><span>M</span><span>G</span></h3></Link>
          <Link to="">Features</Link>
          <Link to="">Entire Catalogue</Link>
          <Link to="">About Us</Link>
        </div>

        <Link to="">View Saved</Link>
      </div>
    </div>
  )
}

export default Navbar;