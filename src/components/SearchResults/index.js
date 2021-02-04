import React from "react";

function SearchResults(props) {
  return (
    <form>
      <button onClick={props.handleFormSubmit} className="btn btn-warning mt-3">
          Search
        </button>
        <br></br><br></br>
        <h6>User Directory below</h6>
        {SearchResults}
    </form>
  );
}

export default SearchResults;

