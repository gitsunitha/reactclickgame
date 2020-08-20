import React from "react";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid mainContainer">
        <Header />
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
