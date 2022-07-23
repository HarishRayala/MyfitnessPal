import { Box, Button, Heading, Input, LinkBox } from "@chakra-ui/react";
import React, { useContext } from "react";
import Navbar from "./Navbar";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from 'js-cookie'
import { Auth } from "../context";

const Login = () => {
  const navigate=useNavigate();
  const {userdata,setuserData} = useContext(Auth)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data=>{
    axios.post("http://localhost:3004/login",data).then((res)=>{
        console.log(res.data)
        Cookies.set("username", JSON.stringify(res.data), { expires: 5 })
        
        setuserData(res.data);
        navigate("/")

    }).catch((err)=>{
        console.log(err.message)
    })
  }
  return (
    <div>
      <Navbar />
      <form className="loginbox" onSubmit={handleSubmit(onSubmit)}>
        <Heading size="md">Member Login</Heading>
        <br />
        <Input placeholder="Email Address" marginBottom="10px" {...register("email", { required: true })}  />
        <br />
        <Input placeholder="Password" marginBottom="10px"  {...register("password", { required: true , minLength:5})} />
        <br />
        
        <Input type="submit" value="LOG IN"  backgroundColor="#0066ee" color="white" width="360px"/>
          
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
