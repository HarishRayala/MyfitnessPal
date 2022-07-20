import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Navbar";

const Home = () => {
  const [text, setText] = useState("");
  const [pic, setPic] = useState(0);

  const imagesSlider = [
    {
      image: "../assets/HomeImages/corousel_1.jpg",
    },
    {
      image: "../assets/HomeImages/corousel_2.jpg",
    },
    {
      image: "../assets/HomeImages/corousel_3.jpg",
    },
  ];

  return (
    <div>
      <Navbar />

      <Box className="home_top_div">
        <Box className="home_head_div">
          <Box className="home_main_head">
            Fitness starts with what you eat.
          </Box>
          <Text fontSize="lg">
            Take control of your goals. Track calories, break down ingredients,
            and log activities with MyFitnessPal.
          </Text>
          <br />
          <Box>
            <Link to="/signup">
              {" "}
              <Button className="startforfree" colorScheme="messenger">
                START FOR FREE
              </Button>
            </Link>
          </Box>
          <br />
          <Box>
            Already have an account? <Link to="/login">Login</Link>
          </Box>
        </Box>
      </Box>
      <Box className="home_body_1">
        <Box className="line"></Box>
        <Box margin="auto" width="500px" textAlign="center">
          <Heading>Search over 11 million foods in our database.</Heading>

          <Text fontSize="xl">
            What's in your food? Learn about calorie count, nutrition
            information and serving size.
          </Text>
        </Box>
        <Box className="home_input_search_box">
          <Input
            backgroundColor="white"
            width="800px"
            height="80px"
            borderRadius="20px"
            outline="none"
            border="none"
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Get the nutrition for any food, like an apple"
          />
          <Link to={`/food/${text}`}>
            <Button border="none" bg="white">
              <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" />
            </Button>
          </Link>
        </Box>
      </Box>
      <br />
      <Box className="home_body_2">
        <Box className="home_body_2_sec1">
          <Box
            fontSize="50px"
            fontWeight=" 760"
            color="#222628"
            lineHeight="50px"
            textAlign="center"
          >
            The Tools for Your Goals
          </Box>
          <Text fontSize="lg">
            Trying to lose weight, tone up, lower your BMI, or invest in your
            overall health? We give you the right features to hit your goals.
          </Text>
        </Box>
        <br />
        <Box className="home_body_2_sec2">
          <Box className="home_body_2_sec3">
            <Image
              margin="auto"
              src="https://www.myfitnesspal.com/_next/static/media/diary.e6e4c438.svg"
              alt=""
            />
            <br />
            <Heading size="md">Learn. Track. Improve.</Heading>
            <br />
            <Text>
              Keeping a food diary helps you understand your habits and
              increases your likelihood of hitting your goals.
            </Text>
          </Box>
          <Box className="home_body_2_sec3">
            <Image
              margin="auto"
              src="https://www.myfitnesspal.com/_next/static/media/barcode.18277ae4.svg"
              alt=""
            />
            <br />
            <Heading size="md">Logging Simplified</Heading>
            <br />
            <Text>
              Scan barcodes, save meals and recipes, and use Quick Tools for
              fast and easy food tracking.
            </Text>
          </Box>
          <Box className="home_body_2_sec3">
            <Image
              margin="auto"
              src="https://www.myfitnesspal.com/_next/static/media/shoeblue.28e2684f.svg"
              alt=""
            />
            <br />
            <Heading size="md">Stay Motivated</Heading>
            <br />
            <Text>
              Join the World's Largest Fitness Community for advice, tips, and
              support 24/7.
            </Text>
          </Box>
        </Box>
        <br />
        <br />
        <br />
        <Link to="/signup">
          {" "}
          <button
            style={{
              backgroundColor: "#0066ee",
              height: "50px",
              width: "300px",
              color: "white",
              borderRadius: "5px",
            }}
          >
            START YOUR JOURNEY TODAY
          </button>{" "}
        </Link>
      </Box>
      <br />
      <br />
      <br />
      <Box textAlign="center" width="800px" margin="auto">
        <Box
          fontSize="50px"
          fontWeight=" 860"
          color="#222628"
          lineHeight="50px"
          textAlign="center"
          margin="auto"
        >
          Victory Stories
        </Box>
        <br />

        <Text fontSize="md">
          When you reach your goals, our whole community celebrates with you.
          That’s over 200 million members sharing in your victory—using it to
          inspire their own journey.
        </Text>
      </Box>
      <Box>
        <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-Chevron-arrows-tanah-basah-glyph-tanah-basah-9.png" />

        <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-Chevron-arrows-tanah-basah-glyph-tanah-basah-9.png" />

        {imagesSlider.map((e, id) =>
          setTimeout(() => {
            <img src={e.image} />;
          }, 3000)
        )}

        <img src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/48/000000/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-8.png" />
      </Box>

      <Box textAlign="center" width="800px" margin="auto">
        <Box
          fontSize="50px"
          fontWeight=" 860"
          color="#222628"
          lineHeight="50px"
          textAlign="center"
          margin="auto"
        >
          Recipes & Inspiration
        </Box>
        <br />
        <Text fontSize="xl">
          Get nutritionist-approved recipes and motivational workout tips from
          MyFitnessPal experts.
        </Text>
      </Box>
      <br />
      <Box margin="auto">
        <Flex gap="20px">
          <Box width="400px">
            <Link to="https://blog.myfitnesspal.com/10-make-ahead-breakfasts-under-300-calories/">
              <Box>
                <Image
                  src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbreakfast-300-calories.d991cc82.png&w=640&q=75"
                  alt=""
                />
                <Heading size="md">
                  15 Make-Ahead Breakfasts Under 300 Calories
                </Heading>
                <br />
                <Text color="#0066ee">MyFitnessPal Blog</Text>
              </Box>
            </Link>
          </Box>
          <Box width="400px">
            <Link to="https://blog.myfitnesspal.com/10-make-ahead-breakfasts-under-300-calories/">
              <Box>
                <Image
                  src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcheat-days.a49e92b5.jpg&w=1920&q=75"
                  alt=""
                />
                <Heading size="md">The Problem with Cheat Days</Heading>
                <br />
                <Text color="#0066ee">MyFitnessPal Blog</Text>
              </Box>
            </Link>
          </Box>
          <Box width="400px">
            <Link to="https://blog.myfitnesspal.com/10-make-ahead-breakfasts-under-300-calories/">
              <Box>
                <Image
                  src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgetting-moving.e3e4042a.png&w=1920&q=75"
                  alt=""
                />
                <Heading size="md">Essential Guide to Getting Moving</Heading>
                <br />
                <Text color="#0066ee">MyFitnessPal Blog</Text>
              </Box>
            </Link>
          </Box>
        </Flex>
      </Box>

      <Box></Box>
    </div>
  );
};

export default Home;
