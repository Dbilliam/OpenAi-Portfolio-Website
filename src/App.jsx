import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'
import { Projects, Home } from "./pages";


function App() {

  return (
    <Routes>
      <Route path="Project" element={<Projects />} />
      <Route path="/*" element={<Home />} />
    </Routes>

  )
}

export default App
