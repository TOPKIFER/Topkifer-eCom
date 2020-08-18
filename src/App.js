import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <h1>Hello World</h1>
      </div>
    </Router>
  );
}

export default App;
