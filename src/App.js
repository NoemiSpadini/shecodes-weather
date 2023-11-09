import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Barcelona" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/noemi-spadini/"
            target="_blank"
            rel="noreferrer"
          >
            Noemi Spadini
          </a>{" "}
          and is open-sourced on {""}
          <a
            href="https://github.com/NoemiSpadini/shecodes-weather"
            target="blank"
            rel="noreferrer"
          >
            GitHub{" "}
          </a>
          and hosted on Netlify
        </footer>
      </div>
    </div>
  );
}
