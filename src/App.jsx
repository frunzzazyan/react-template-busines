import React, { useEffect, useState } from 'react'
import SiteHeader from './components/SiteHeader'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import PracticeAreas from './components/PracticeAreas'
import Legal from './components/Legal'
import Blog from './components/Blog'
import ContactUs from './components/ContactUs'

const App = () => {
  const [data,setData] = useState()

  useEffect(()=>{
    fetch("src/JSON/script.json").then(res=>res.json()).then(res=>setData(res))
  },[])

  return (
    <Routes>
      <Route path='/' element={
        <>
        <SiteHeader/>
        <Home home={data}/>
        </>
      }/>
      <Route path='/about' element={
        <>
        <SiteHeader/>
        <About about={data}/>
        </>
      }/>
      <Route path='/practiceAreas' element={
        <>
        <SiteHeader/>
        <PracticeAreas practicAreas={data}/>
        </>
      }/>
      <Route path='/legal' element={
        <>
        <SiteHeader/>
        <Legal legal={data}/>
        </>
      }/>
      <Route path='/blog' element={
        <>
        <SiteHeader/>
        <Blog blog={data}/>
        </>
      }/>
      <Route path='/contact' element={
        <>
        <SiteHeader/>
        <ContactUs/>
        </>
      }/>

    </Routes>
    
  )
}

export default App