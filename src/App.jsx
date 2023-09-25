import React from "react";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";

// React Router
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/room/:id" element={<RoomDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
