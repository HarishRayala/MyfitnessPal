import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Box bg="#f6f6f8" height="100px" mt="100px" color="blue" >
        <Box pt="30px" >
          <Flex gap="80px" justifyContent="center" >
            <Box >
              <Link to="/">Calorie Counter</Link>{" "}
              <Link to="/blog">Blog</Link>{" "}
              <Link to="/">Terms</Link>{" "}
              <Link to="/">Contact Us</Link>{" "}
              <Link to="/">API</Link>{" "}
              <Link to="/">Jobs</Link>{" "}
              <Link to="/">Feedback</Link>{" "}
              <Link to="/">Community GuideLines</Link>{" "}
              <Link to="/">Add Choices</Link>{" "}
              <Link to="/">Do Not Sell My Personal Information</Link>{" "}
            </Box>
            <Box>
              <select>
                <option value="english">English</option>
                <option value="telugu">Telugu</option>
                <option value="hindi">Hindi</option>
                <option value="urdu">Urdu</option>
                <option value="kannada">Kannada</option>
                <option value="tamil">Tamil</option>
                <option value="malayalam">Malayalam</option>
                <option value="bengali">Bengali</option>
                <option value="gujarat">Gujarati</option>
                <option value="marati">Marati</option>
                <option value="assam">Assamese</option>
                <option value="punjabi">Punjabi</option>
              </select>
            </Box>
          </Flex>
          <br />
          <Box color="black" textAlign="center">
            <Text>© 2022 MyFitnessPal, Inc.</Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
