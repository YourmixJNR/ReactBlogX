import React from "react";
import { useState } from "react";

const SearchWidget = () => {
  const [input, setInput] = useState();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <div className="card mb-4">
        <div className="card-header">Search</div>
        <div className="card-body">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Enter search term..."
              aria-label="Enter search term..."
              aria-describedby="button-search"
              value={input}
              onChange={(e) => handleChange(e)}
            />
            <button className="btn btn-primary" id="button-search" type="button">
              Go!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWidget;
