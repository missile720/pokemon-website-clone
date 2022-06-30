import React, { useState } from 'react'
import './RowFour.css'

function RowFour() {
  const[blueDark, setBlueDark] = useState("");
  const[pinkTwoDark, setPinkTwoDark] = useState("");
  const[purpleTwoDark, setPurpleTwoDark] = useState("");
  const[lightBlueTwoDark, setLightBlueTwoDark] = useState("");

  const colorTenHandler = () => {
    setBlueDark("blueDarkBanner");
  };

  const colorTenOffHandler = () => {
    setBlueDark("");
  };

  const colorElevenHandler = () => {
    setPinkTwoDark("pinkDarkBanner");
  };

  const colorElevenOffHandler = () => {
    setPinkTwoDark("");
  };

  const colorTwelveHandler = () => {
    setPurpleTwoDark("purpleDarkBanner");
  };

  const colorTwelveOffHandler = () => {
    setPurpleTwoDark("");
  };

  const colorThirteenHandler = () => {
    setLightBlueTwoDark("lightBlueDarkBanner");
  };

  const colorThirteenOffHandler = () => {
    setLightBlueTwoDark("");
  };

  return (
    <div className='rowFour'>
      <div className='pokeMewtwo'>
        <div className='hoverAnimationBounce' onMouseEnter={colorTenHandler} onMouseLeave={colorTenOffHandler}>
          <img className= "imageSectionOne" src={require("../../../assets/pokemon-go.jpg")} width={281} height={159} alt=""></img>
          <div className={'blueBanner ' + (blueDark)}>
            <h3>Mewtwo Pokémon GO Raid Battle Strategy</h3>
            <p>Learn how to catch and utilize Mewtwo that know the Psychic-type Charged Attack Psystrike.</p>
          </div>
        </div>
      </div>
      <div className='colTwo'>
        <h2 className='newHeader'>What's New This Week</h2>
        <div className='pokeZ'>
          <div className='hoverAnimationBounce' onMouseEnter={colorElevenHandler} onMouseLeave={colorElevenOffHandler}>
            <img className= "imageSectionOne" src={require("../../../assets/swsh11-announce-169-en.jpg")} width={281} height={159} alt=""></img>
            <div className={'pinkTwoBanner ' + (pinkTwoDark)}>
              <h3>No Card Escapes the Lost Zone in <em>Sword & Shield—Lost Origin</em></h3>
              <p>The upcoming Pokémon TCG expansion features new Radiant Pokémon, Trainer Gallery cards, and the return of the Lost Zone.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='colThree'>
        <div className='pokeAdvance'>
          <div className='hoverAnimationBounce' onMouseEnter={colorTwelveHandler} onMouseLeave={colorTwelveOffHandler}>
            <img className= "imageSectionOne" src={require("../../../assets/season07-on-ptv-announce-169-en.png")} width={281} height={159} alt=""></img>
            <div className={'purpleTwoBanner ' + (purpleTwoDark)}>
              <h3>Take the <em>Advanced Challenge</em> on Pokémon TV</h3>
              <p>Ash, Pikachu, and friends continue their journey through the Hoenn region as the seventh season of <em>Pokémon the Series</em> arrives on Pokémon TV this Friday.</p>
            </div>
          </div>
        </div>
        <div className='hoverAnimationBounce' onMouseEnter={colorThirteenHandler} onMouseLeave={colorThirteenOffHandler}>
          <h2 className='orangeText'>View All News</h2>
          <p className={'blueText ' + (lightBlueTwoDark)}>Keep up with all the latest developments!</p>
        </div>
      </div>
    </div>
  )
}

export default RowFour