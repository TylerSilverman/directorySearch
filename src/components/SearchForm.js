import React from "react";

function SearchForm(props) {
  return (
    <form>
      <br></br><br></br>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a User"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-warning">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
