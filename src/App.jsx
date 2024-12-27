import { useState } from 'react'

import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Feature } from './components/Feature'
import { About } from './components/About'
import { Pricing } from './components/Pricing'
import { Footer } from './components/Footer'

function App() {
 

  return (
    <>
    <Navbar/>
    <Home/>
    <Feature/>
    <About/>
    <Pricing/>
    <Footer/>
    </>
  )
}

export default App
