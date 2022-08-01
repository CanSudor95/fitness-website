import { useEffect } from "react";
import "./Filter.css";

function Filter() {
  return (
    <div className="filter-container">
      <button type="button" className="btn btn-light">
        Abs
      </button>
      <button type="button" className="btn btn-light">
        Arms
      </button>
      <button type="button" className="btn btn-light">
        Chest
      </button>
      <button type="button" className="btn btn-light">
        Legs
      </button>
    </div>
  );
}

export default Filter;
