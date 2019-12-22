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
      const handleClickLogo = () => {
        window.location ="/LandingPage"
      }

  return (
  <nav>
    <ul>
      <li><a href="/" ><img  onClick={handleClickLogo} className="paw" src={Paw} alt={"paw"}/></a></li>
      <li className="web-name"  onClick={handleClickLogo}><h1>DogFinder</h1></li>
      <li className="slogan"  onClick={handleClickLogo}>Adopt a Friendly Companion</li>
    </ul>
    <div className="btn" >
    
      <button onClick={handleClickAdopt} className="nav-btn">Adopt</button>
      <button onClick={handleClickContact} className="nav-btn">Contact</button>
    </div>
  </nav>
  )}

export default Navbar