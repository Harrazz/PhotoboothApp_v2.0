import "./App.css";
import React from "react";
import CustomWebcam from "./components/CustomWebcam";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App background-container">
      <Header/>
      <CustomWebcam/>
    </div>
  );
};

export default App;