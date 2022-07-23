import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Box>
        <Flex
          fontWeight="600"
          color="white"
          gap="20px"
          justifyContent="space-around"
          padding="10px 0px 10px 0px"
          bg="#0066ee"
          direction={{ base: "column", md: "row", sm: "column" }}
          alignItems="center"
        >
          <Box>
            <Link to="/about">ABOUT</Link>
          </Box>
          <Box>
            <Link to="/">FOOD</Link>
          </Box>
          <Box>
            <Link to="/">EXERCISE</Link>
          </Box>
          <Box>
            <Link to="/apps">APPS</Link>
          </Box>
          <Box>
            <Link to="/">COMMUNITY</Link>
          </Box>
          <Box>
            <Link to="/blog">BLOG</Link>
          </Box>
          <Box>
            <Link to="/">PREMIUM</Link>
          </Box>
          <Box>
            <Link to="/goals">GOALS</Link>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar;
