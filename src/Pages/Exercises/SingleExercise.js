import React from "react";
import { Link, useParams } from "react-router-dom";
import exercises from "../../Data";
import "./SingleExercise.css";

function SingleExercise() {
  const { exerciseId } = useParams();
  const exercise = exercises.find((exercise) => exercise.id === exerciseId);

  const { image, name, difficulty, bodyPart, description } = exercise;
  return (
    <div className="container">
      <div className="title">
        <h1>{name}</h1> <hr />
        <p>
          <b>Diffculty:</b>
          {difficulty}
          <br />
          <b>Body Part:</b>
          {bodyPart}
        </p>
      </div>

      <div className="image">
        <img src={image} alt={``} />
      </div>
      <div className="description">
        <h2>Description</h2> <hr />
        {description}
      </div>
      <button className="button">
        <Link
          to="/Exercises"
          style={{ textDecoration: "none", color: "white" }}
        >
          Back to Exercises Page
        </Link>
      </button>
    </div>
  );
}

export default SingleExercise;
