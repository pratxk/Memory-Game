import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
        <Link to='/quiz'>
            <Button bg='white' color='black' fontWeight='bold' rounded='md' shadow='xl'>Lets Start</Button>
        </Link>
        </>
    )
}

export default Home
