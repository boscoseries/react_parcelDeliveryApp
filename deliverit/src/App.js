import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Homepage from "./pages/Homepage";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Homepage} />
        <Footer />
        </div>
    </Router>
  );
}

export default App;
