import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { assets } from '../../assets/assets';
import Header from '../../Components/Header/Header';


function Dashboard() {
  return (
    <div>
        {/* <Header></Header> */}
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
              className="d-block w-100 "style={{height:'650px'}}
              src={assets.dashboard}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Personal Checking</h3>
              <p>From accounts with no monthly service charge to interest bearing accounts, 
                we have a variety of options that will suit your individual goals and make managing your money easy. 
                If you aren’t sure which is right for you, visit any CBC Banker!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Dashboard