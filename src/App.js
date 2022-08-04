import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Exercises from "./Pages/Exercises/Exercises";
import SingleExercise from "./Pages/Exercises/SingleExercise";
import MyExercises from "./Pages/Exercises/MyExercises";
import Login from "./Pages/Login/Login";
import Error from "./Pages/Error";
import Footer from "./components/Footer/Footer";

import exercises from "./Data";

function App() {
  const [exerciseList, setExerciseList] = useState([]);
  const { allExercises } = exercises;
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Exercises" element={<Exercises props={allExercises} />} />
        <Route path="/Exercises/:exerciseId" element={<SingleExercise />} />
        <Route
          path="MyExercises"
          element={<MyExercises exerciseList={exerciseList} />}
        />
        <Route path="Login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
