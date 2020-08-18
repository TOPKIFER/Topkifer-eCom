import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./components/pages/homepage";
import Login from "./components/pages/login_register";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Homepage />
        <Login />

        <h1>Hello from APP</h1>
      </div>
    </Router>
  );
}

export default App;
