import React from "react";

export default function About() {
  return (
    <>
      <h2>About the Anonymous Stock Trading Game</h2>
      <p>
        Hi, I’m Anthony. I created the Anonymous Stock Trading Game for my final
        project at{" "}
        <a
          href="https://flatironschool.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Flatrion School
        </a>
        . The requirements were to build a Ruby on Rails API with a React
        frontend and Redux for state management.
      </p>

      <p>
        I’ve had the idea for the game for months and decided to use it for my
        final project. This was by far the most challenging project but also the
        most fulfilling to watch it complete! The most challenging part of the
        project was updating the canvas chart and keeping everything in sync so
        that when a player presses the buy or sell button (or b/s keys) the
        trade is based on the current price displayed to the user and the chart
        and portfolio are updated accordingly.
      </p>

      <p>
        This project was a lot of fun to work on and I have plans to add new
        features; like short selling and custom settings.
      </p>
    </>
  );
}
