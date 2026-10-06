import {BrowserRouter, Routes, Route} from "react-router-dom";
import { LandingPage } from './LandingPage'
import { RegionSelectorPage } from './RegionSelectorPage'
import { useState } from 'react'
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/RegionSelectorPage" element={<RegionSelectorPage/>} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
