import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.users array
function SearchForm(props) {
  return (
    <form>
    <div className="form-group">
    <label htmlFor="search">User Directory:</label>
    <input
      onChange={props.handleInputChange}
      value={props.search}
      name="search"
      type="text"
      className="form-control"
      placeholder="Search for a User"
      id="search"
    />
  </div>
  </form>
  );
}

export default SearchForm;
