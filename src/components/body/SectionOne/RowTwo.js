import React from 'react'
import "./RowTwo.css"

function RowTwo() {
  return (
    <div className='rowTwo'>
        <div className='pokeGo'>
            <img className= "imageSectionOne" src={require("../../../assets/pokemon-go-169.jpg")} width={280} height={158} alt=""></img>
            <div className='yellowBanner'>
                <h3>The Pokémon TCG Merges with Pokémon GO in an Epic Crossover</h3>
            </div>
        </div>
        <div className='pokeRadiance'>
            <img className= "imageSectionOne" src={require("../../../assets/swsh10-radiant-greninja-169-en.jpg")} width={280} height={158} alt=""></img>
            <div className='blackBanner'>
                <h3>Pokémon TCG Triple Play: Radiant Greninja from <em>Sword & Shield—Astral Radiance</em></h3>
            </div>
        </div>
        <div className='pokeToon'>
            <img className= "imageSectionOne" src={require("../../../assets/poketoon-169-en.png")} width={280} height={158} alt=""></img>
            <div className='orangeBanner'>
                <h3>Get Tough with Pancham in Episode 2 of <em>POKÉTOON</em></h3>
            </div>
        </div>
    </div>
  )
}

export default RowTwo