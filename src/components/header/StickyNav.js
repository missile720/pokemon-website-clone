import React, { useEffect, useState } from 'react'
import "./StickyNav.css"

function StickyNav() {
  const[sticky,setSticky] = useState('');

  useEffect(() => {
    const handleScroll = event => {
      console.log('window.scrollY', window.scrollY);
      if (window.scrollY >= 68) {
        setSticky("sticky");
      } 
      else {
        setSticky("");
      }
    };

    window.addEventListener('scroll', handleScroll);

    return() => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={sticky}>
      <div className='StickyNav'>
        <div className='home'>
          {/* <a href="https://www.flaticon.com/free-icons/pikachu" title="pikachu icons">Pikachu icons created by Darius Dan - Flaticon</a> */}
          <img src={require("../../assets/avatar.png")} alt=""></img>
          <p className='homeText'>Home</p>
        </div>
        <div className='pokedex'>
          <img className="img-bottom" src={require("../../assets/avatar (1).png")} alt=""></img>
          <img className="img-top" src={require("../../assets/avatar (2).png")} alt=""></img>
          <br/>
          Pokédex
        </div>
        <div className='videoGames'>
          <img className="img-bottom" src={require("../../assets/avatar (3).png")} alt=""></img>
          <img className="img-top" src={require("../../assets/avatar (4).png")} alt=""></img>
          <br/>
          Video Games & Apps
        </div>
        <div className='cardGames'>
          <img className="img-bottom" src={require("../../assets/avatar (5).png")} alt=""></img>
          <img className="img-top" src={require("../../assets/avatar (6).png")} alt=""></img>
          <br/>
          Trading Card Game
        </div>
        <div className='tv'>
          <img className="img-bottom" src={require("../../assets/avatar (7).png")} alt=""></img>
          <img className="img-top" src={require("../../assets/avatar (8).png")} alt=""></img>
          <br/>
          Pokémon TV
        </div>
        <div className='events'>
          <img className="img-bottom" src={require("../../assets/avatar (9).png")} alt=""></img>
          <img className="img-top" src={require("../../assets/avatar (10).png")} alt=""></img>
          <br/>
          Play! Pokémon Events
        </div>
        <div className='news'>
          <img className="img-bottom" src={require("../../assets/avatar (11).png")} alt=""></img>
          <img className="img-top" src={require("../../assets/avatar (12).png")} alt=""></img>
          <br/>
          News
        </div>
      </div>
    </div>
  )
}

export default StickyNav