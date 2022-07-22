import { AbsoluteCenter } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Apps from './Apps'
import Home from './Home'
import Navbar from './Navbar'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path="/about" element={<About/>} ></Route>
            <Route path="/apps" element={<Apps/>} ></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes