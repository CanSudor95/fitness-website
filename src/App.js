import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Exercises from "./Pages/Exercises/Exercises";
import Exercises1 from "./Pages/Exercises/Exercises1";
import SingleExercise from "./Pages/Exercises/SingleExercise";
import MyExercises from "./Pages/Exercises/MyExercises";
import Login from "./Pages/Login/Login";
import Error from "./Pages/Error";
import Footer from "./components/Footer/Footer";

import exercises from "./Data";

function App() {
  const [exerciseList, setExerciseList] = useState([
    {
      id: "1",
      name: "Crunch",
      bodyPart: "Abs",
      difficulty: "Beginner",
    },
    {
      id: "2",
      name: "Chest Press",
      bodyPart: "Chest",
      equipment: "Barbell",
      difficulty: "Advanced",
    },
  ]);
  const arr = [1, 2, 3];
  const { allExercises } = exercises;
  let number = 0;
  const handleAddExercise = () => {
    number++;
    console.log(number);
  };
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route
          path="Exercises"
          element={<Exercises allExercises={allExercises} />}
        />
        <Route
          path="Exercises1"
          element={
            <Exercises1
              allExercises={allExercises}
              handleAddExercise={handleAddExercise}
            />
          }
        />
        <Route path="/Exercises/:exerciseId" element={<SingleExercise />} />
        <Route
          path="MyExercises"
          element={<MyExercises arr={arr} exerciseList={exerciseList} />}
        />
        <Route path="Login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
