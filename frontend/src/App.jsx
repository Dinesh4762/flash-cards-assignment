import { useState } from "react";
import "./App.css";
import FlashContainer from "./components/FlashContainer";
import FlashCard from "./components/FlashCard";
import NavigateButton from "./components/NavigateButton";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import EditPopup from "./components/EditPopup";

function App() {

  return (
    <div className="">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit/:id" element={<EditPopup/>} />
      </Routes>
    </div>
  );
}

export default App;
