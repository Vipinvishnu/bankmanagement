

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { assets } from '../../assets/assets';
import Header from '../../Components/Header/Header';




function Home() {
  return (
    
    <div>
        <Header></Header>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={assets.homeimage2}
              alt="First slide"
            />
            <Carousel.Caption>
              <h2>Born, raised, and invested in South Georgia.</h2>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={assets.homeimage}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second Slide Label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "style={{height:'650px'}}
              src={assets.homeimage3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third Slide Label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Home;
