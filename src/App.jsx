import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Lodgings from "./pages/Lodgings";

function App(){
    return (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="lodging/:lodgingId" element={<Lodgings />} />
          </Routes>
          <Footer />
        </Router>
      );
}
  
export default App;
  