import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@chakra-ui/react'
import Home from './Pages/Home'
import {Route, Routes} from 'react-router-dom'
import Memory from './Pages/Quiz/Memory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/quiz'} element={<Memory/>}/>
      </Routes>   
      
    </>
  )
}

export default App
