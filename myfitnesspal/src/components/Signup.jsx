import React from "react";
import Navbar from "./Navbar";
import "./login.css";
import { Button, Heading, Input } from "@chakra-ui/react";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <form className="signupbox">
        <Heading size="md">Member Signup</Heading>
        <br />
        <Input type="text" placeholder="Enter your name" marginBottom="10px" />
        <br />
        <Input placeholder="Email Address" marginBottom="10px" />
        <br />
        <Input placeholder="Password" marginBottom="10px" />
        <br />
        <Input type="date" placeholder="Date of birth" marginBottom="10px" />
        <br />
        <Button colorScheme="blue" width="360px">
          Sign Up
        </Button>
        <p>or</p>
        <a href="https://www.facebook.com/">
          <Button colorScheme="facebook" width="360px">
            <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
            Continue with facebook
          </Button>
        </a>
      </form>
    </div>
  );
};

export default Signup;
