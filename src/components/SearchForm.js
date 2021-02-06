import React from "react";

function SearchForm(props) {
  return (
    <form>
      <br></br>
      <div className="form-group"> 
        {/* <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search new user"
          id="search"
        /> */}
        <br />
        <button onClick={props.handleFormSubmit} console={props.value} className="btn btn-info">
          New Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
