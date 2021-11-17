import React from 'react'
import { Carousel } from 'react-bootstrap';

import placeholder1 from "../image/c-d-x-PDX_a_82obo-unsplash.jpg";
import placeholder3 from "../image/rachit-tank-2cFZ_FB08UM-unsplash.jpg";
import placeholder4 from "../image/revolt-164_6wVEHfI-unsplash.jpg";

const Hero = () => {
    return (
        <Carousel>
  <Carousel.Item style={{height:"250px"}}>
    <img
      className="d-block w-100"
      src={placeholder1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Headphones</h3>
      <p>Browse some of our top-quality headphones</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{height:"250px"}}>
    <img
      className="d-block w-100"
      src={placeholder4}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Footwear</h3>
      <p>Check out our most comfortable shoes</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{height:"250px"}}>
    <img
      className="d-block w-100"
      src={placeholder3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Tech Gadgets</h3>
      <p>Stay connected everywhere you go</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        
    )
}

export default Hero;