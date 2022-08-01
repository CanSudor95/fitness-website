import React, { useState } from "react";

import "./Exercises.css";
import exercises from "../../Data";
/*if filter need to be used as an external component*/
/* import Filter from "../../components/Filter/Filter"; */
import "../../components/Filter/Filter.css";

function Exercises() {
  const [fullExerciseList, setFullExerciseList] = useState(exercises);
  const [exerciseList, setExerciseList] = useState(exercises);

  const filterResult = (filterType) => {
    const result = fullExerciseList.filter((bodyPartFilter) => {
      return bodyPartFilter.bodyPart === filterType;
    });
    setExerciseList(result);
  };

  return (
    <section>
      {/*       <Filter /> */}
      <div className="filter-container">
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
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-3">
        {exerciseList.map((exercise) => {
          const { id, image, name, difficulty, bodyPart } = exercise;
          return (
            <div key={id} className="col">
              <div className="card h-100">
                <img
                  src={image}
                  className="card-img-top fittedImage"
                  alt={``}
                />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">
                    <b>Focused Area: </b>
                    {bodyPart} <br />
                    <b>Difficulty: </b>
                    {difficulty}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Exercises;
