import { AbsoluteCenter } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import About from './About'
import Home from './Home'
import Navbar from './Navbar'

const AllRoutes = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} ></Route>
            {/* <Route path="/about" element={<About/>} ></Route> */}
        </Routes>
    </div>
  )
}

export default AllRoutes