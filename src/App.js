import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a href="https://www.linkedin.com/in/noemi-spadini/" target="_blank">
            Noemi Spadini
          </a>{" "}
          and is open-sourced on GitHub and hosted on Netlify
        </footer>
      </div>
    </div>
  );
}
