import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import UserDetail from "./components/UserDetail" //displaying user gender
import Container from "./components/Container"; //displaying the information 
import Card from "./components/Card";
import SearchForm from "./components/SearchForm";
import API from "./utils/API";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
    };
    this.sortByAge = this.sortByAge.bind(this);
  };

  componentDidMount() {
    API.getUsers().then((data )=> {
      this.setState({
        users: data.data.results
      });
    });
  };

  sortByAge (){
    const original = [...this.state.users]
    const sortAge = original.sort((a, b ) => {
      return a.dob.age - b.dob.age
    })

      this.setState({
        users: sortAge,
      });
  }

  render(){
    const {users} = this.state;
    

    return (
      <div>
        <Navbar />
        <Header />
        <Container size="md-12">
        <SearchForm />
        <Card>
          
        <UserDetail users={users} onSortByAge={this.sortByAge}/>
        </Card>
        </Container>
      </div>
      
    );
  }
}

export default App;
