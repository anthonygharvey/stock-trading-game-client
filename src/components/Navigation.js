import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./logo.svg";

const Navbar = () => {
  return (
    <div className="ui menu">
      <div style={{ height: "40px", width: "40px" }}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="header item">Anoymous Stock Trading Game</div>

      <div className="right menu">
        <Link to="/leaderboard">
          <div className="item">Leaderboard</div>
        </Link>
        <Link to="/about">
          <div className="item">About</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
