import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
import { useEffect } from "react";
import { Auth } from "../context";

const Header = () => {
  const {userdata,setuserData} = useContext(Auth)
  //  console.log(userData)
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
            {userdata && <Text fontWeight="bold" >{userdata.user.name}</Text>}
              {userdata ? (
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    Cookies.remove("username");
                    setuserData(null);
                  }}
                >
                  log out
                </Button>
              ) : (
                <>
                  <Link to="/login">log In</Link> {"|"}{" "}
                  <Link to="/signup">Sign Up</Link>
                </>
              )}
            </Box>
          </Stack>
        </Flex>
      </Box>
    </div>
  );
};

export default Header;
