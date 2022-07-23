import { Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Blog.css";

const slideImages = [
  {
    url: "/blogsliderimages/blogslider-1.jpg",
    caption: "Your HomeScreen is Getting Makeover",
  },
  {
    url: "/blogsliderimages/blogslider-2.jpg",
    caption: "3 Days Weight loss Change Your Brain",
  },
  {
    url: "/blogsliderimages/blogslider-3.jpg",
    caption: "15 Great Foods For Gut Health",
  },
  {
    url: "/blogsliderimages/blogslider-4.jpg",
    caption: "Essential Guide to MyFitness plan Premium",
  },
  {
    url: "/blogsliderimages/blogslider-5.jpg",
    caption: "3 Metabolism Boosting",
  },
  {
    url: "/blogsliderimages/blogslider-6.jpg",
    caption: "5 Summer DEsserts with lessthan 100 Calories",
  },
  {
    url: "/blogsliderimages/blogslider-7.jpg",
    caption: "10 Walking mistakes you avoid If you want to loose your weight",
  },
  {
    url: "/blogsliderimages/blogslider-8.jpg",
    caption: "8 Foods Worth making at home to Loose your weight",
  },
  {
    url: "/blogsliderimages/blogslider-9.jpg",
    caption: "15 Make Ahead BreakFasts under 300 Calories",
  },
  {
    url: "/blogsliderimages/blogslider-10.jpg",
    caption: "Your 10minute- no equipment total body workout",
  },
];
const Blogslideshow = () => {
  return (
    <div>
      <div className="blogslider">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index} className="blogslider2">
              <div className="blogslider3">
                <Link to="/blog">
                  <img src={slideImage.url} alt="image" style={{height:"220px"}}/>
                  <Text fontSize="lg" >{slideImage.caption}</Text>
                </Link>
               
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Blogslideshow;
