import React from 'react'
import "./Nav.css"

function Nav() {
  return (
    <div className='Nav'>
      <div className='imageNav activeNav'>
        <a href="">
          <img src={require("../../assets/logo-pokemon-79x45.png")} alt="" width={79} height={45}></img>
        </a>
      </div>
      <div className='imageNav'>
        <a href="">
          <img className='imageNavOne' src={require("../../assets/logo-pokemoncenter-79x45.png")} alt="" width={79} height={45}></img>
        </a>
      </div>
      <div className='imageNav'>
        <a href="">
          <img className='imageNavTwo' src={require("../../assets/logo-tcgo-79x45.png")} alt="" width={79} height={45}></img>
        </a>
      </div>
      <div className='imageNavRight imageNavRightOne'>
        <a href="">
          <img src={require("../../assets/swsh10-gus-175-en.jpg")} alt="" width={175} height={50}></img>
        </a>
      </div>
      <div className='imageNavRight imageNavRightTwo'>
        <a href="">
          <img src={require("../../assets/legends-arceus-176x50-us.jpg")} alt="" width={175} height={50}></img>
        </a>
      </div>
      <div className='imageNavRight imageNavRightThree'>
        <a href="">
          <img src={require("../../assets/unite-176x50.jpg")} alt="" width={175} height={50}></img>
        </a>
      </div>
    </div>
  )
}

export default Nav