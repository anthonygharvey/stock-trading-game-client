import React from "react";
// import Logo from './'
import { ReactComponent as Logo } from "./logo.svg";

const Navbar = () => {
  return (
    // <Logo />
    <div class="ui menu">
      <div style={{ height: "40px", width: "40px" }}>
        <Logo />
      </div>
      <div class="header item">Anoymous Stock Trading Game</div>
    </div>
  );
};

export default Navbar;
