import React from 'react'
import { NavBar, Footer } from '../components'
import Overview from './Overview'
import Projects from './Projects'
import Skills from './Skills'


const Home = () => {
  return (
    <>
      <NavBar />
      <Overview/>
      <Skills/>
      <Projects />
      <Footer/>
    </>
  )
}

export default Home