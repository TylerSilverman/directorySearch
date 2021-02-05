import React from "react";
import API from "../utils/API";

class UserDetal extends React.Component {
    constructor (props){
        super(props);
        this.state ={
            users: null
        }
    }

    ///check to see if there is a user
    componentDidMount (){
        API.getUsers().then(data => {
            console.log(data)
            this.setState({
                users: data.data.results
            })
        })
    }

    render() {
        const users = this.state.users;
        return (
            <div>
                {users && (users.map(user => {
                    return (
                        <h1>{user.gender}</h1>
                    )
                }))}
            </div>
        )
    }

}
export default UserDetal;