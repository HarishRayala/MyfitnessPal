import { Box, Button, Divider, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Blogslideshow from "./Blogslideshow";
import Navbarblog from "./Navbarblog";

const Blog = () => {
  return (
    <div>
      <Navbarblog />
      <Box className="box_1">
        <br />
        <Box className="box1_1">
          <Heading>Fitness Starts with what you eat</Heading>
          <br />
          <Text>Sign up for your personalized newsletter</Text>
        </Box>
        <br />
        <Box className="box1_2">
          <Input placeholder="Your Email" width="300px" />
          <Link to="/signup">
            <Button colorScheme="blue" width="200px">
              Sign Up
            </Button>
          </Link>
        </Box>
      </Box>

      <br />
      <br />
      <Box className="trending">
        <Text fontSize="xl" color="blue">
          <b>Trending Articles</b>
        </Text>

        <hr />
      </Box>
      <br />
      <Box>
        <Blogslideshow />
      </Box>
      <br />

      <Box>
        <Text fontSize="xl" color="blue">
          <b>Latest Articles</b>
        </Text>

        <hr />
      </Box>
      <br />
      <Link to="/blog">
        <Box className="latestarticles">
          <Text pt="380px" pl="30px" color="white">
            {" "}
            <b> TOP 10 FAMILY-FRIENDLY HIKES IN THE U.S. PARKS</b>
          </Text>
        </Box>
      </Link>

      <Box className="latestarticles1" >
        <Link to="/" >
        <img src="https://blog.myfitnesspal.com/wp-content/uploads/2021/02/15-Great-Foods-For-Gut-Health-2-750x592.jpg.webp" alt="image" style={{width:"400px"}} />
        <b>15 Great Foods For Gut Health</b>
        </Link>
        <Link to="/" >
        <img src="https://blog.myfitnesspal.com/wp-content/uploads/2021/07/Featured200smooth-1-750x592.jpg" alt="image"  style={{width:"400px"}} />
        <b>5 Summer Desserts With LessThan 100 Calories</b>
        </Link>
        <Link to="/" >
        <img src="https://blog.myfitnesspal.com/wp-content/uploads/2017/10/How-to-Make-Your-Own-Almond-Butter-1-750x592.jpg.webp" alt="image"  style={{width:"400px"}} />
        <b>How To Make Your Own Almond Butter</b>
        </Link>
        <Link to="/" >
        <img src="https://blog.myfitnesspal.com/wp-content/uploads/2021/07/3-Perks-of-Hot-Weather-Workouts-750x592.jpg" alt="image" style={{width:"400px"}} />
        <b>3 Perks of Hot-Weather Workout</b>
        </Link>
        <Link to="/" >
        <img src="https://blog.myfitnesspal.com/wp-content/uploads/2022/06/5-Smart-and-Simple-Ways-to-Stay-Hydrated-750x592.jpg.webp" alt="image" style={{width:"400px"}} />
        <b>5 Smart and Simple Ways to Stay Hydrated</b>
        </Link>
      </Box>
    </div>
  );
};

export default Blog;
