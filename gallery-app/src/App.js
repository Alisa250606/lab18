import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import MyCity from "./pages/MyCity";
import MyFuture from "./pages/MyFuture";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/about" element={<AboutMe />} />
            <Route path="/my-city" element={<MyCity />} />
            <Route path="/my-future" element={<MyFuture />} />
            <Route path="*" element={<AboutMe />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
