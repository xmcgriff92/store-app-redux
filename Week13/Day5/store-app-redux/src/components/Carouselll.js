import React from "react";
import { Carousel } from "react-bootstrap";
import { BannerImg } from "./Style";

export default function Carouselll() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <BannerImg
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1573148195900-7845dcb9b127?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Shop from iPhone X to 13!</h3>
            <p>Options from refurbished to brand new.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <BannerImg
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1598331668826-20cecc596b86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Shop Headsets/Earpods</h3>
            <p>From Airpods, Beats by Dre, Samsung, and more!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <BannerImg
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1583573636246-18cb2246697f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1338&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Shop Android</h3>
            <p>
              From Samsung, Google, Sony, and many other Android brands!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
