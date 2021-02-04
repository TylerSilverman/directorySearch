import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    users: [],
    results: []
  };

  handleInputChange = event => {
    console.log("handle input change ")
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
//handle the search button to diplay the information 
  handleFormSubmit = event => {
    console.log("handle the search button search")
    event.preventDefault();
    this.searchUser(this.state.search);

    API.search(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    console.log("handle the render function ")
    return (
      <div>
        <Container style={{ minHeight: "60%" }}>
          <h1 className="text-center">Search For User !!</h1>
          <Alert>
          <p></p>
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            users={this.state.users}
          />
          <p>Search</p><SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
