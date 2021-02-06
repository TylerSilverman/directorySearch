import React from "react";
import API from "../utils/API";

class UserDetail extends React.Component {
    constructor (props){
        super(props);
        this.state ={
            users: null,
            first: "",
            last: "",
            gender: "",
            email:"",
            phone:"",
            dob: ""
        }
    }

    
    componentDidMount (){
        API.getUsers().then(data => {
            console.log(data + "componentDidMount function")
            console.log(data.data.results)
            this.setState({
                users: data.data.results
            })
        })
    }

    render() {
        const users = this.state.users;

        return (
            <div className="text">
                {users && (users.map(user => {

                   return (
                    <table class="table">
                    <thead class="thread-dark">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name:</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email Address</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Years Old</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <th scope="col">{user.name.first}</th>
                        <td>{user.name.last}</td>
                        <td>{user.gender}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.dob.age}</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <th scope="col">{user.name.first}</th>
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