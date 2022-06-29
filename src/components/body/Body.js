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
      <div className='spacer'>
        <div className='spacerWhite'></div>
      </div>
    </div>
  )
}

export default Body