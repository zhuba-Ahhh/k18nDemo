import React from "react";
import "./App.css";
import Next from "./components/next";
import Kuai from "./components/i18n";

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <Next />
        <Kuai />
      </header>
    </div>
  );
}

export default App;
