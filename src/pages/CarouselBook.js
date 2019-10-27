import React from 'react';
import {Carousel } from 'react-bootstrap';

export default function CarouselSlide (){
    return(
        <div style={{ height:'450px', width:'700px'}}>
        <Carousel>
        <Carousel.Item>
          <img
            src=" "
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{color: 'Orange', fontWeight: 'bolder'}}>World history</h3>
            <p style={{textDecoration: 'line-through', color: 'black', fontWeight: 'bold'}}>10.900 դրամ</p>
            <p style={{color: 'red', fontWeight: 'bolder',  fontSize: '20px'}}>7.900 դրամ</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src=" "
            alt="Second slide"
          />
          <Carousel.Caption>
            <p style={{textDecoration: 'line-through', color: 'black', fontWeight: 'bold'}}>8.900 դրամ</p>
            <p style={{color: 'red', fontWeight: 'bolder',  fontSize: '24px'}}>4.900 դրամ</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src=" "
            alt="Third slide"
          />
          <Carousel.Caption>
          <h3 style={{ fontWeight: 'bolder'}}>Roll</h3>
            <p style={{textDecoration: 'line-through', color: 'black', fontWeight: 'bold'}}>15.900 դրամ</p>
            <p style={{color: 'red', fontWeight: 'bolder',  fontSize: '24px'}}>11.900 դրամ</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    )
}