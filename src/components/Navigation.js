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
          <div1 className="item">Leaderboard</div1>
        </Link>
        <Link to="/about">
          <div1 className="item">About</div1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
