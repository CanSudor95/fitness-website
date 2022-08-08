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
  const { allExercises } = exercises;
  const [exerciseList, setExerciseList] = useState([]);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleAddExercise = (exercise) => {
    const exerciseExist = exerciseList.find((item) => item.id === exercise.id);
    if (exerciseExist) {
      debugger;
    } else {
      setExerciseList([...exerciseList, { ...exercise }]);
      console.log(exerciseList);
    }
  };
  const handleRemoveExercise = (exercise) => {
    setExerciseList(exerciseList.filter((item) => item.id !== exercise.id));
  };
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route
          path="Exercises"
          element={
            <Exercises
              allExercises={allExercises}
              handleAddExercise={handleAddExercise}
              handleRemoveExercise={handleRemoveExercise}
            />
          }
        />
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
