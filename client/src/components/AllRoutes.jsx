import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import About from '../pages/About'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Projects from '../pages/Projects'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/projects' element={<Projects/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes