import React from 'react'
import '../assets/stylesheets/navbar.css'
import Paw from '../assets/images/paw.png'


const Navbar = () => {

      const handleClickAdopt = () => {
      window.location = '/dogsForAdoption';
    };

      const handleClickContact =() => {
        window.location = '/dogs';
      }

  return (
  <nav>
    <ul>
      <li><img className="paw" src={Paw} alt={"paw"} /></li>
      <li><h1>DogFriendFinder</h1></li>
      
    </ul>
    <div className="button-nav" >
      <button>Services</button>
      <button>Resouces</button>
      <button>LogIn</button>
    
      </div>
  

  </nav>
  )}

export default Navbar