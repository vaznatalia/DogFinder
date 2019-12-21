
import React from 'react'
import '../assets/stylesheets/landingpage.css'
import ControlledCarousel from '../components/ControlledCarousel'
import { Redirect} from 'react-router-dom'


class LandingPage extends React.Component {
  handleClick() {
    console.log('Click happened');
  }
 
  render() {
    return (
      <div>
        <ControlledCarousel />
       <div className="find-bt">
       
         <span className="about">Connecting adoptable pets with families.
         <button onClick={() =>this.handleclick()}
           className="center-btn"
         >Find your Companion!
         </button></span>
         </div>
         
      </div>
    )
     
  }
}


export default LandingPage
