import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Homepage} />
        <Route path="/signup" exact component={Signup} />
        <Footer />
        </div>
    </Router>
  );
}

export default App;
