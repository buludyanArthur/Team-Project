import React from 'react';
import {Carousel } from 'react-bootstrap';
​
export default function CarouselSlide (){
    return(
        <div style={{ height:'450px', width:'700px'}}>
        <Carousel>
        <Carousel.Item>
          <img
            src="https://www.penguin.co.uk/content/dam/prh/books/312/312227/9780241373330.jpg.transform/PRHDesktopWide_small/image.jpg"
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
            src="https://images3.penguinrandomhouse.com/cover/9780385544313"
            alt="Second slide"
          />
          <Carousel.Caption>
            <p style={{textDecoration: 'line-through', color: 'black', fontWeight: 'bold'}}>8.900 դրամ</p>
            <p style={{color: 'red', fontWeight: 'bolder',  fontSize: '24px'}}>4.900 դրամ</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://prodimage.images-bn.com/pimages/9781984800862_p0_v2_s550x406.jpg"
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
