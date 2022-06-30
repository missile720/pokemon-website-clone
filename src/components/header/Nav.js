import React, { useState } from 'react'
import "./Nav.css"

function Nav() {
  const[classNameOne, setClassNameOne] = useState('');
  const[classNameTwo, setClassNameTwo] = useState('');
  const[classNameThree, setClassNameThree] = useState('');

  const hoverZeroHandler = () => {
    setClassNameOne('opac');
    setClassNameTwo('opac');
    setClassNameThree('opac');
  };

  const hoverZeroOffHandler = () => {
    setClassNameOne('');
    setClassNameTwo('');
    setClassNameThree('');
  };

  const hoverOneHandler = () => {
    setClassNameOne('');
  };

  const hoverOneOffHandler = () => {
    setClassNameOne('opac');
  };

  const hoverTwoHandler = () => {
    setClassNameTwo('');
  };

  const hoverTwoOffHandler = () => {
    setClassNameTwo('opac');
  };

  const hoverThreeHandler = () => {
    setClassNameThree('');
  };

  const hoverThreeOffHandler = () => {
    setClassNameThree('opac');
  };

  return (
    <div className='Nav'>
      <div className='imageNav activeNav'>
        <a href="">
          <img src={require("../../assets/logo-pokemon-79x45.png")} alt="" width={79} height={45}></img>
        </a>
      </div>
      <div className='imageNav'>
        <a href="">
          <img className='imageNavOne'  src={require("../../assets/logo-pokemoncenter-79x45.png")} alt="" width={79} height={45}></img>
        </a>
      </div>
      <div className='imageNav'>
        <a href="">
          <img className='imageNavTwo' src={require("../../assets/logo-tcgo-79x45.png")} alt="" width={79} height={45}></img>
        </a>
      </div>
      <div className='fixNav' onMouseEnter={hoverZeroHandler} onMouseLeave={hoverZeroOffHandler}>
        <div className='imageNavRight'>
          <a href="">
            <img className={classNameOne} onMouseEnter={hoverOneHandler} onMouseLeave={hoverOneOffHandler} src={require("../../assets/swsh10-gus-175-en.jpg")} alt="" width={175} height={50}></img>
          </a>
        </div>
        <div className='imageNavRight'>
          <a href="">
            <img className={classNameTwo} onMouseEnter={hoverTwoHandler} onMouseLeave={hoverTwoOffHandler} src={require("../../assets/legends-arceus-176x50-us.jpg")} alt="" width={175} height={50}></img>
          </a>
        </div>
        <div className='imageNavRight'>
          <a href="">
            <img className={classNameThree} onMouseEnter={hoverThreeHandler} onMouseLeave={hoverThreeOffHandler} src={require("../../assets/unite-176x50.jpg")} alt="" width={175} height={50}></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Nav