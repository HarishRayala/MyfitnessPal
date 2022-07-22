import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Home.css";

const slideImages = [
  {
    url: "/apppagesliderimages/appspageimage1.png",
    caption: "Slide 1",
  },
  {
    url: "/apppagesliderimages/appspageimage3.png",
    caption: "Slide 3",
  },
  {
    url: "/apppagesliderimages/appspageimage4.png",
    caption: "Slide 4",
  },
  {
    url: "/apppagesliderimages/appspageimage5.png",
    caption: "Slide 5",
  },
  {
    url: "/apppagesliderimages/appspageimage6.png",
    caption: "Slide 6",
  },
];
const AppPageSlider = () => {
  return (
    <div>
      <div style={{width:"800px"}} >
        <Slide >
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div style={{ marginLeft:"100px" }}>
                <img src={slideImage.url} alt="image" />
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default AppPageSlider;
