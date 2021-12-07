import React, {useEffect, useState } from "react";
import "./App.css";
import Homes from "./components/Homes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Rooms from "./components/Rooms";


function App() {
 
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Homes/>}>
      
        </Route>
        <Route path="/rooms/:roomId" element={<Rooms room={{name:""}}/>}>
       
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
