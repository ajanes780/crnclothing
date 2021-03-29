import React from "react";
import "./App.css";
import { HomePage } from "./pages/homepage/HomepageComponent";
import { Switch, Route, link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
