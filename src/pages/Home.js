
import React from 'react';
import {Carousel } from 'react-bootstrap';
import slide_1 from '../image/slide_1.jpg';
import slide_2 from '../image/slide_2.jpg';
import slide_3 from '../image/slide_3.jpg'

export default function Home(){
    return(
        <div>
        <div className="carusel">
        <Carousel>
        <Carousel.Item>
          <img
            src={slide_1}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={slide_2}
            alt="Second slide"
          />
        
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={slide_3}
            alt="Third slide"
          />
         
        </Carousel.Item>
      </Carousel>
      </div>
      </div>
    )
}