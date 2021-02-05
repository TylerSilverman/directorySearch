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
          placeholder="Search for a user"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} console={props.value} className="btn btn-info">
          User Search
        </button>
        <br></br>
      </div>
      <br></br>
    </form>
  );
}

export default SearchForm;
