import React from 'react';
import { Carousel } from 'react-bootstrap';


class Slideshow extends React.Component {
    render() {
        return (
            <Carousel>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://negativespace.co/wp-content/uploads/2017/06/negative-space-cute-dog-nose-white-background-lum3n-thumb-1.jpg"
                        alt="First slide"
                    />
                    
                    
                    <Carousel.Caption>
                        <h3>teste</h3>
                        <p></p>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img2.akspic.com/image/32003-boy_and_dog-boy-puppy-dog_breed-rough_collie-1920x1080.jpg?attachment=1"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                      

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://www.photobackgroundhd.com/wp-content/uploads/2018/08/Dog-HD-Images.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                
      
        )
    }

}
export default Slideshow