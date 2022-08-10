import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MyExercises.css";

function MyExercises({ exerciseList, handleRemoveExercise, toggleButton }) {
  var size = Object.keys(exerciseList).length;

  return (
    <div className="cart-items">
      <div className="cart-items-header">
        <h1>My Exercises</h1>
        {size === 0 ? (
          <div className="no-item">
            <div>
              <h2>
                You do not have any selected exercise yet. Please select
                exercise.
              </h2>
              <Link
                to={`/Exercises`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <button>Check the Exercises</button>
              </Link>
            </div>
          </div>
        ) : (
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
                  <th>Exercise Page</th>
                  <th>Remove Exercise</th>
                </tr>
              </thead>
              <tbody>
                {exerciseList.map((exercise, key) => {
                  return (
                    <tr key={exercise.id}>
                      <td>{exercise.name}</td>
                      <td>{exercise.bodyPart}</td>
                      <td>{exercise.difficulty}</td>
                      <td>
                        <Link
                          to={`/Exercises/${exercise.id}`}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <button>Check the Exercise</button>
                        </Link>
                      </td>
                      <td className="remove-column">
                        <button
                          className="remove-button"
                          onClick={() => {
                            handleRemoveExercise(exercise);
                            toggleButton(exercise.id - 1);
                          }}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyExercises;
