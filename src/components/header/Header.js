import React from 'react'
import Nav from './Nav'
import StickyNav from './StickyNav'

function Header() {
  return (
    <div>
      <Nav/>
      <StickyNav/>
    </div>
  )
}

export default Header