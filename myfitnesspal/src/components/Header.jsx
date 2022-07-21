import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Box color="#0066ee">
        <Flex justifyContent="space-around" padding="10px 0px 20px 0px">
          <Box>
            <Link to="/">
              <Heading fontSize="30px">myfitnesspal</Heading>
            </Link>
          </Box>

          <Stack mt="10px">
            <Box gap="10px">
              <Link to="/login">log In</Link> {"|"}{" "}
              <Link to="/signup">Sign Up</Link>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </div>
  );
};

export default Header;
