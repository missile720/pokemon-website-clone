import React, { useState } from 'react'
import "./RowTwo.css"

function RowTwo() {
    const[yellowDark, setYellowDark] = useState("");
    const[blackDark, setBlackDark] = useState("");
    const[orangeDark, setOrangeDark] = useState("");

    const colorFourHandler = () => {
        setYellowDark("yellowDarkBanner");
    };

    const colorFourOffHandler = () => {
        setYellowDark("");
    };

    const colorFiveHandler = () => {
        setBlackDark("blackDarkBanner");
    };

    const colorFiveOffHandler = () => {
        setBlackDark("");
    };

    const colorSixHandler = () => {
        setOrangeDark("orangeDarkBanner");
    };

    const colorSixOffHandler = () => {
        setOrangeDark("");
    };

  return (
    <div className='rowTwo'>
        <div className='pokeGo'>
            <div className='hoverAnimationBounce' onMouseEnter={colorFourHandler} onMouseLeave={colorFourOffHandler}>
                <img className= "imageSectionOne" src={require("../../../assets/pokemon-go-169.jpg")} width={280} height={158} alt=""></img>
                <div className={'yellowBanner ' + (yellowDark)}>
                    <h3>The Pokémon TCG Merges with Pokémon GO in an Epic Crossover</h3>
                </div>
            </div>
        </div>
        <div className='pokeRadiance'>
            <div className='hoverAnimationBounce' onMouseEnter={colorFiveHandler} onMouseLeave={colorFiveOffHandler}>
                <img className= "imageSectionOne" src={require("../../../assets/swsh10-radiant-greninja-169-en.jpg")} width={280} height={158} alt=""></img>
                <div className={'blackBanner ' + (blackDark)}>
                    <h3>Pokémon TCG Triple Play: Radiant Greninja from <em>Sword & Shield—Astral Radiance</em></h3>
                </div>
            </div>
        </div>
        <div className='pokeToon'>
            <div className='hoverAnimationBounce' onMouseEnter={colorSixHandler} onMouseLeave={colorSixOffHandler}>
                <img className= "imageSectionOne" src={require("../../../assets/poketoon-169-en.png")} width={280} height={158} alt=""></img>
                <div className={'orangeBanner ' + (orangeDark)}>
                    <h3>Get Tough with Pancham in Episode 2 of <em>POKÉTOON</em></h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RowTwo