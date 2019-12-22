
import React from 'react'
import '../assets/stylesheets/landingpage.css'
import ControlledCarousel from '../components/ControlledCarousel'
 



  const LandingPage = () => {
    const handleClick = () => {
      window.location = '/dogsForAdoption';
    };

    return (
      <div>
        <ControlledCarousel />
       <div className="find-bt">
       
         <span className="about">Connecting adoptable pets with families.
         <button  className="center-btn"  onClick={handleClick}  >Find your Companion!
         </button></span>
         </div>
         
      </div>
    )
     
  }


export default LandingPage
