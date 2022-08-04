import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Exercises.css";
import exercises from "../../Data";
/*if filter need to be used as an external component*/
/* import Filter from "../../components/Filter/Filter"; */
import "../../components/Filter/Filter.css";

function Exercises() {
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
  return (
    <section>
      {/*       <Filter /> */}
      <div className="filter-container">
        <div className="fitnessHeader">
          <div className="content1">
            <div>
              <p>
                It's time to <b>UNLEASH</b> the beast inside you
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
              <Link
                to={`/Exercises/${id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="card h-100">
                  <img
                    src={image}
                    className="card-img-top fittedImage"
                    alt={``}
                  />
                  <div className="card-body">
                    <div className="left">
                      <h5 className="card-title">{name}</h5>
                      <p className="card-text">
                        <b>Focused Area: </b>
                        {bodyPart} <br />
                        <b>Difficulty: </b>
                        {difficulty}
                      </p>
                    </div>
                    <div className="right">
                      <button className="btn btn-warning">
                        Add to My Exercises
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Exercises;
