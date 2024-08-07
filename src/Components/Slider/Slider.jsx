import React from 'react'
import Card from '../Card/Card'
import "../Slider/Slider.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Slider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
     
     <div className='cardSlider-container'>
      <Carousel 
      responsive={responsive}
      infinite={true}
      >
        <Card src="card1.png"/>
        <Card src="card2.png"/>
        <Card src="card3.png"/>
        <Card src="card4.png"/>
        <Card src="card5.png"/>
        <Card src="card6.png"/>
        <Card src="card7.png"/>
        <Card src="card8.png"/>
      </Carousel>
    </div>

  )
}
