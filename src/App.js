import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";


function App() {
  return (
    <Router basename="/pizza-delivery-app">
      <Routes>
        <Route exact path="/" element = {<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
