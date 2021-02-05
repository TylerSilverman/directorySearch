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
            phone:""
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
            <div className="text-center">
                {users && (users.map(user => {
                    return (
                        <h5>First Name:{user.name.first} </h5>
                        // <h5>Last Name:{user.name.last} </h5>
                    )
                    
                }))}
            </div> 
        )
    }

}
export default UserDetail;
// First Name: {user.name.first}
// Last Name: {user.name.last}
// Gender: {user.gender}
// Email Address: {user.email}
// Phone Number: {user.phone}
