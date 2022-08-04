import React from "react";
import "./MyExercises.css";

function MyExercises(exerciseList) {
  console.log(exerciseList.exerciseList.length);

  return (
    <div className="container">
      <h1>My Exercises</h1>
      {exerciseList.exerciseList.length === 0 && (
        <div>There isn't any Exercises yet. Please pick one. </div>
      )}
    </div>
  );
}

export default MyExercises;
