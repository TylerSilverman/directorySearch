import React from "react";
import API from "../utils/API";

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      images:"",
      first: "",
      last: "",
      gender: "",
      email: "",
      phone: "",
      dob: ""
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick = () => {
    console.log("handleClick function ")
    // this.setState({skip: this.data.skip + 1})
  }

  componentDidMount() {
    API.getUsers().then(data => {
      console.log(data + "componentDidMount function")
      console.log(data.data.results)
      this.setState({
        users: data.data.results
      });
    });
  };

  render() {
    const users = this.state.users;

    return (
      
      <div className="table thread">
           <table class="table">
              <thead class="thread">
                <tr>
                  <th scope="col">Images:</th>
                  <th scope="col" onClick={this.handleClick}>First Name:</th>
                  <th scope="col">Last Name:</th>
                  <th scope="col">Gender:</th>
                  <th scope="col">Email Address:</th>
                  <th scope="col">Phone Number:</th>
                  <th scope="col">Years Old:</th>
                </tr>
              </thead>
            </table>
        {users && (users.map(user => {
          return (
            <table class="table">
              <tbody>
                <tr>
                <td><img src={user.picture.medium}></img></td>
                  <td>{user.name.first}</td>
                  <td>{user.name.last}</td>
                  <td>{user.gender}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.dob.age}</td>
                </tr>
              </tbody>
            </table>

          );

        }))}
      </div>
    )
  }
}
export default UserDetail;