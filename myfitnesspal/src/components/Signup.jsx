import React from "react";
import Navbar from "./Navbar";
import "./login.css";
import { Button, Heading, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{
    axios.post("https://project-myfitnesspal.herokuapp.com/register",data).then((res)=>{
        console.log(res.data)
    }).catch((err)=>{
        console.log(err.message)
        alert("PLEASE Enter new Email")
    })
}
  return (
    <div>
      <Navbar />
      <form className="signupbox" onSubmit={handleSubmit(onSubmit)}>
        <Heading size="md">Member Signup</Heading>
        <br />
        <Input type="text" placeholder="Enter your name" marginBottom="10px" {...register("name",{ required: true })} />
        {errors.name && <span>This field is required</span>}
        <br />
        <Input placeholder="Email Address" marginBottom="10px" {...register("email", { required: true })}/>
        {errors.email && <span>This field is required</span>}
        <br />
        <Input placeholder="Password" marginBottom="10px" {...register("password", { required: true , minLength:5})} />
        {errors.password && <span>This field is required</span>}
        <br />
        <Input type="date" placeholder="Date of birth" marginBottom="10px" {...register("dob", { required: true })} />
        {errors.dob && <span>This field is required</span>}
        <br />
        <Input type="submit" value="Sign Up" backgroundColor="#0066ee" color="white" width="360px"  />
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
