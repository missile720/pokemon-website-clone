import React from 'react'
import Feature from './Feature'
import RowOne from './RowOne'
import RowTwo from './RowTwo'
import './SectionOne.css'

function SectionOne() {
  return (
    <div className='sectionOneContainer'>
        <RowOne/>
        <RowTwo/>
        <Feature/>
    </div>
  )
}

export default SectionOne