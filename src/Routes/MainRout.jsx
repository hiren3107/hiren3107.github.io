import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Project from '../Pages/Project'

function MainRout() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project' element={<Project />} />
        </Routes>
    </div>
  )
}

export default MainRout