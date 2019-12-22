import React from 'react';
import Results from '../components/Results'

class dogsForAdoption extends React.Component {
  state = {
    animals: [],
    breed: '',
    age: 'all',
    gender: 'all'
  };

  componentDidMount() {
    fetch('/api/animals')
      .then(response => response.json())
      .then(data => this.setState({ animals: data }));
  }

  handleBreed = (e) => {
    let breed = e.target.value
    this.setState({ breed })
  }

  handleAge = (e) => {
    let age = e.target.value
    this.setState({ age })
  }

  handleGender = (e) => {
    let gender = e.target.value
    this.setState({ gender })
  }

  render() {
    const {   age, gender } = this.state
    return (
      <>
        <div className="  dogFilter">
        
          <nav className="navbar navbar-light ">
            <form    className="form-inline">
             <input style={{margin:'20px'}} className="form-control  mr-sm-2" type="search" placeholder="Search by  type, gender, breed..." aria-label="Search"/>
              </form>
               </nav>
  
          <select  value={age} id="dogAge" onChange={this.handleAge}>
            <option value="Baby">Baby</option>
            <option value="Young">Young</option>
            <option value="Adult">Adult</option>
            <option value="all">All Age</option>
          </select>

       
          <select value={gender} id="dogGender" onChange={this.handleGender}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="all">All Gender</option>
          </select>
        </div>

       


        <Results {...this.state} />
      </>

    );
  }
}
export default dogsForAdoption;