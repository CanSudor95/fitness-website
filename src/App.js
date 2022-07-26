import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
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
  /*Variables,States & Functions for exercise Page*/
  const allExercises = exercises;

  const [exerciseList, setExerciseList] = useState([]);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  /*Function to add Exercise to MyExercise page*/
  const handleAddExercise = (exercise) => {
    const exerciseExist = exerciseList.find((item) => item.id === exercise.id);
    if (exerciseExist) {
      debugger;
    } else {
      setExerciseList([...exerciseList, { ...exercise }]);
      console.log(exerciseList);
    }
  };

  /*Function to remove Exercise from MyExercise page*/
  const handleRemoveExercise = (exercise) => {
    setExerciseList(exerciseList.filter((item) => item.id !== exercise.id));
  };
  /*Function to toggle Button of the Current exercise in Exercise page*/
  const toggleButton = (key) => {
    allExercises[key].toggled = !allExercises[key].toggled;
    console.log(allExercises[key]);
  };
  /* End of Variables,States & Functions for exercise Page*/

  /*Variables,States & Functions for Login Page*/
  const LoginInfo = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);

  /*--State for Login Toggle--*/
  const [toggle, setToggle] = useState(true);
  /*------------------------------*/

  const logIn = (details) => {
    console.log(details);
    if (
      details.email == LoginInfo.email &&
      details.password == LoginInfo.password
    ) {
      setUser({ email: details.email, password: details.password });
      LogInToggle();
    } else {
      if (!error) {
        setError(!error);
      }
    }
  };
  const LogOut = () => {
    setUser({ email: "", password: "" });
    setToggle(!toggle);
  };
  const LogInToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  /*End of Variables,States & Functions for Login Page*/
  return (
    <BrowserRouter>
      <NavBar toggle={toggle} LogOut={LogOut} />
      <ScrollToTop />
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
              toggleButton={toggleButton}
            />
          }
        />
        <Route path="/Exercises/:exerciseId" element={<SingleExercise />} />
        <Route
          path="MyExercises"
          element={
            <MyExercises
              exerciseList={exerciseList}
              handleRemoveExercise={handleRemoveExercise}
              toggleButton={toggleButton}
            />
          }
        />
        <Route
          path="Login"
          element={
            <Login
              logIn={logIn}
              error={error}
              LogOut={LogOut}
              LogInToggle={LogInToggle}
              toggle={toggle}
            />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
