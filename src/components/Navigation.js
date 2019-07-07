import React from "react";
import { ReactComponent as Logo } from "./logo.svg";

const Navbar = () => {
  return (
    <div className="ui menu">
      <div style={{ height: "40px", width: "40px" }}>
        <a href="/">
          <Logo />
        </a>
      </div>
      <a href="/">
        <div className="header item">Anonymous Stock Trading Game</div>
      </a>

      <div className="right menu">
        <a href="/leaderboard">
          <div className="item">Leaderboard</div>
        </a>
        <a href="/about">
          <div className="item">About</div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
