import React, { useState } from "react";
import "./MyExercises.css";

function MyExercises({ arr, exerciseList }) {
  var size = Object.keys(exerciseList).length;
  console.log(exerciseList);
  console.log(size);
  return (
    <div className="cart-items">
      <div className="cart-items-header">
        <h1>My Exercises</h1>
        {size === 0 && (
          <div>There isn't any Exercises yet. Please pick one. </div>
        )}
        <div>
          {/*  {exerciseList.map((exercise) => {
            return (
              <div key={exercise.id} className="element">
                <p>{exercise.name}</p>
              </div>
            );
          })} */}
          <table className="table">
            <thead>
              <tr>
                <th>Exercise Name</th>
                <th>Exercise Area</th>
                <th>Exercise Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {exerciseList.map((exercise) => {
                return (
                  <tr key={exercise.id}>
                    <td>{exercise.name}</td>
                    <td>{exercise.bodyPart}</td>
                    <td>{exercise.difficulty}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyExercises;
