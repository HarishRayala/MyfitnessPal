import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import "./Home.css"

const slideImages = [
    {
      url: '/corousel_1.jpg',
      caption: 'Slide 1'
    },
    {
      url: '/corousel-2.jpg',
      caption: 'Slide 2'
    },
    {
      url: '/corousel_3.jpg',
      caption: 'Slide 3'
    },
  ];
const HomeSlideshow = () => {
  return (
    <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div >
                <img src={slideImage.url} alt="image"  />
                
              </div>
            </div>
          ))} 
        </Slide>
    </div>
  )
}

export default HomeSlideshow