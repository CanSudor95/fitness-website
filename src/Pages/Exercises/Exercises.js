import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Exercises.css";
import exercises from "../../Data";
/*if filter need to be used as an external component*/
/* import Filter from "../../components/Filter/Filter"; */
import "../../components/Filter/Filter.css";

function Exercises1({ handleAddExercise, handleRemoveExercise }) {
  /* fullExerciseList is used to keep the original data unchanged. 
     exerciseList is used to alter the data for our desire
     searchTerm is used for searchbar */
  const [fullExerciseList, setFullExerciseList] = useState(exercises);
  const [exerciseList, setExerciseList] = useState(exercises);
  const [searchTerm, setSearchTerm] = useState("");

  const filterResult = (filterType) => {
    const result = fullExerciseList.filter((bodyPartFilter) => {
      return bodyPartFilter.bodyPart === filterType;
    });
    setExerciseList(result);
  };
  const searchFilter = () => {
    if (searchTerm === "") {
      setExerciseList(fullExerciseList);
    } else {
      const result = fullExerciseList.filter(
        (exercise) =>
          exercise.bodyPart.toLowerCase().includes(searchTerm) ||
          exercise.name.toLowerCase().includes(searchTerm) ||
          exercise.difficulty.toLowerCase().includes(searchTerm)
      );
      setExerciseList(result);
    }
  };

  const toggleButton = (key) => {
    exerciseList[key].toggled = !exerciseList[key].toggled;
    setExerciseList(exerciseList);
    console.log(exerciseList[key]);
  };
  return (
    <section>
      {/*       <Filter /> */}
      <div className="empy">
        <div className="fitnessHeader">
          <div className="content1">
            <div>
              <p>
                <b>GET</b> FIT
              </p>
              <p style={{ color: "orange" }}>
                <b>GET</b> GOING
              </p>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => setExerciseList(fullExerciseList)}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => filterResult("Abs")}
        >
          Abs
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => filterResult("Arms")}
        >
          Arms
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => filterResult("Chest")}
        >
          Chest
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => filterResult("Legs")}
        >
          Legs
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => filterResult("Full Body")}
        >
          Full Body
        </button>
        {/* Button Filter Finishes
        
        
        */}
        {/* Search Bar Part Begins 
        
        
        */}
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={(e) => {
            setSearchTerm(e.target.value.toLowerCase());
            searchFilter();
          }}
        />
        {/* Search Bar Part Ends */}
      </div>

      <div className="row row-cols-1 row-cols-md-4 g-3 ">
        {exerciseList.map((exercise, key) => {
          const { id, image, name, difficulty, bodyPart } = exercise;
          return (
            <div key={id} className="col">
              <div className="card h-100">
                <Link
                  to={`/Exercises/${id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img
                    src={image}
                    className="card-img-top fittedImage"
                    alt={``}
                  />
                </Link>
                <div className="card-body">
                  <Link
                    to={`/Exercises/${id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="left">
                      <h5 className="card-title">{name}</h5>
                      <p className="card-text">
                        <b>Focused Area: </b>
                        {bodyPart} <br />
                        <b>Difficulty: </b>
                        {difficulty}
                      </p>
                    </div>
                  </Link>
                  <div className="right">
                    {exerciseList[key].toggled ? (
                      <button
                        onClick={() => {
                          handleRemoveExercise(exercise);
                          toggleButton(key);
                        }}
                      >
                        Remove Exercise
                      </button>
                    ) : (
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          handleAddExercise(exercise);
                          toggleButton(key);
                        }}
                      >
                        Add Exercise
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Exercises1;
