import React from 'react'
import Feature from './Feature'
import RowOne from './RowOne'
import RowTwo from './RowTwo'
import SideNav from './SideNav'
import './SectionOne.css'

function SectionOne() {
  return (
    <div className='sectionOneContainer'>
      <SideNav/>
      <RowOne/>
      <RowTwo/>
      <Feature/>
    </div>
  )
}

export default SectionOne