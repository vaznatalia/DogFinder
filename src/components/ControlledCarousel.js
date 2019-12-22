import React from 'react';
import { Carousel } from 'react-bootstrap';


function ControlledCarousel() {
  
        return (
            <Carousel>
                <Carousel.Item >
                    <img
                        className="d-block w-100 carouselImg"
                        alt="First slide"
                        src="https://images.pexels.com/photos/1189673/pexels-photo-1189673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImg"
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
                        className="d-block w-100 carouselImg"
                        src="http://www.photobackgroundhd.com/wp-content/uploads/2018/08/Dog-HD-Images.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }


export default ControlledCarousel