import { AbsoluteCenter } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Apps from './Apps'
import Blog from './Blog'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import Signup from './Signup'
import Welcome from './Welcome'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path="/about" element={<About/>} ></Route>
            <Route path="/apps" element={<Apps/>} ></Route>
            <Route path='/blog' element={<Blog/>} ></Route>
            <Route path="/login" element={<Login/>} ></Route>
            <Route path="/signup" element={<Signup/>} ></Route>
            <Route path="/welcome" element={<Welcome/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes