import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className='footerBox'>
      <div className='footerContent'>
        <div className='colOneNav'>
          <h2></h2>
          <ul>
            <a href=''>
              <li>What's New</li>
            </a>
            <a href=''>
              <li>Pokémon Parents Guide</li>
            </a>
            <a href=''>
              <li>Customer Service</li>
            </a>
            <a href=''>
              <li>About Our Company</li>
            </a>
            <a href=''>
              <li>Pokémon Careers</li>
            </a>
            <a href=''>
              <li>Select a Country/Region</li>
            </a>
            <a href=''>
              <li>Pokémon Press Site</li>
            </a>
          </ul>
        </div>
        <div className='colTwoNav'>
          <div className='iconSocial'>
            <img className= "imageSocial" src={require("../../assets/facebook.png")} width={35} height={34} alt=""></img>
            <img className= "imageSocial" src={require("../../assets/youtube.png")} width={35} height={34} alt=""></img>
            <img className= "imageSocial" src={require("../../assets/twitter.png")} width={35} height={34} alt=""></img>
            <img className= "imageSocial" src={require("../../assets/instagram.png")} width={35} height={34} alt=""></img>
            <img className= "imageSocial" src={require("../../assets/pinterest.png")} width={35} height={34} alt=""></img>
          </div>
        </div>
        <div className='colThreeNav'>
          <div className='rowNav'>
          <img className= "imageSocial" src={require("../../assets/thepokemoncompanyinternational-seal-1596150491.png")} width={146} height={57} alt=""></img>
          <div className='colMiniNav'>
            <ul>
              <li><a href="">Terms of Use</a></li>
              <li><a href="">Privacy Notice</a></li>
              <li><a href="">Cookie Page</a></li>
              <li><a href="">Legal Info</a></li>
              <li><a href="">Security</a></li>
            </ul>
          </div>
          </div>
          <div className='rowTwoNav'>
            <span>©2022 Pokémon. ©1995 - 2022 Nintendo/Creatures Inc./GAME FREAK inc. TM, ®Nintendo.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer