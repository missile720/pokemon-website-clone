import React from 'react'
import './SideNav.css'

function SideNav() {
  return (
    <div className='sideNavSticky'>
        <div className='green'>
            <img className= "imageSectionOne" src={require("../../../assets/profile-nav-signup.png")} width={35} height={35} alt=""></img>
            <div className='logIn'>Log In</div>
        </div>
        <div className='imageHover'>
            <img className= "imageSectionOne stickImage" src={require("../../../assets/magnifying-glass.png")} width={28} height={28} alt=""></img>
        </div>
    </div>
  )
}

export default SideNav