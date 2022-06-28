import React from 'react'
import SectionOne from './SectionOne/SectionOne'
import "./Body.css"
import SectionTwo from './SectionTwo/SectionTwo'
import Slider from './Slider/Slider'

function Body() {
  return (
    <div className='backgroundBody'>
      <SectionOne/>
      <Slider/>
      <SectionTwo/>
    </div>
  )
}

export default Body