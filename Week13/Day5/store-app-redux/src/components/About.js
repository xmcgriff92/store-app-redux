import React from "react";
import { Carousel, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5"
import { BannerImg, AboutH1, AboutHP, AboutConatiner, Header4 } from "./Style";

export default function About() {
  return (
    <div className="shadow p-3 mb-5 bg-white rounded">
      <Carousel>
        <Carousel.Item>
          <BannerImg
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>TO </h3>
            <p>Help our customers get the most out of their technologiacal experience.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <BannerImg
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1588336443962-49d88df004a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>TO</h3>
            <p>Provide our users the oppurtunity to have up to date technologies.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <BannerImg
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1514043133987-e4801c95b2c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=955&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>TO</h3>
            <p>Further help revolutionize the worlds most cutting edge technologies.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

        <AboutConatiner>
        <Header4>Our Mission: </Header4> 
        <AboutHP>Is what drives us to do everything possible to expand human potential. 
            We do that by creating groundbreaking technological innovations, by making our products more 
            sustainably, by building a creative and diverse global team and by making a positive impact 
            in communities where we live and work. Making life for the user much easier.</AboutHP>
        </AboutConatiner>

            <AboutConatiner>
        <Nav.Link as={Link} to={"/"}><IoHomeOutline/>Home</Nav.Link>
        </AboutConatiner>
     
    </div>
  );
}
