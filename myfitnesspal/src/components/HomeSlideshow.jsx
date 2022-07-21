import { Box } from '@chakra-ui/react';
import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
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
    <div >
      <div >
        <Slide >
        {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{margin:"0px 0px 0px 150px"}} >
                <img src={slideImage.url} alt="image" srcset=""  />
              </div>
            </div>
          ))}
        </Slide>
        </div>
    </div>
  )
}

export default HomeSlideshow