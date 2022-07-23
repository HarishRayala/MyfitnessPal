import { Box, Button, Heading, Input, LinkBox } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Navbar />
      <form className="loginbox">
        <Heading size="md">Member Login</Heading>
        <br />
        <Input placeholder="Email Address" marginBottom="10px"  />
        <br />
        <Input placeholder="Password" marginBottom="10px" />
        <br />
        
        <Button colorScheme="blue" width="360px">
          LOG IN
        </Button>
        <p>or</p>
        <a href="https://www.facebook.com/">
        <Button colorScheme="facebook" width="360px">
          <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
          Continue with facebook
        </Button>
        </a>
      </form>
      <Box textAlign="center" >
        <p>
          Not a Member yet {" "}
          <Link to="/signup" style={{color:"blue"}} >Signup now</Link>
        </p>
      </Box>
    </div>
  );
};

export default Login;
