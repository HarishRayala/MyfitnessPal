import { Button, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"

const Welcome = () => {
  return (
    <div className='welcomebox' >
        <Heading size="md" >Welcome! Just a few quick questions so we can customize MyFitnessPal for you.</Heading>
        <br />
        <Link to="/goals">
        <Button width="400px" colorScheme="blue"> Continue</Button>
        </Link>
    </div>
  )
}

export default Welcome