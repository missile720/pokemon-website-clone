import React from 'react'
import RowThree from './RowThree'
import RowFour from './RowFour'
import "./SectionTwo.css"
import Explore from './Explore'

function SectionTwo() {
  return (
    <div className='sectionTwoContainer'>
        <Explore/>
        <RowThree/>
        <RowFour/>
    </div>
  )
}

export default SectionTwo