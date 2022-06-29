import React from 'react'
import './RowFour.css'

function RowFour() {
  return (
    <div className='rowFour'>
      <div className='pokeMewtwo'>
        <div className='hoverAnimationBounce'>
          <img className= "imageSectionOne" src={require("../../../assets/pokemon-go.jpg")} width={281} height={159} alt=""></img>
          <div className='blueBanner'>
            <h3>Mewtwo Pokémon GO Raid Battle Strategy</h3>
            <p>Learn how to catch and utilize Mewtwo that know the Psychic-type Charged Attack Psystrike.</p>
          </div>
        </div>
      </div>
      <div className='colTwo'>
        <h2 className='newHeader'>What's New This Week</h2>
        <div className='pokeZ'>
          <div className='hoverAnimationBounce'>
            <img className= "imageSectionOne" src={require("../../../assets/swsh11-announce-169-en.jpg")} width={281} height={159} alt=""></img>
            <div className='pinkTwoBanner'>
              <h3>No Card Escapes the Lost Zone in <em>Sword & Shield—Lost Origin</em></h3>
              <p>The upcoming Pokémon TCG expansion features new Radiant Pokémon, Trainer Gallery cards, and the return of the Lost Zone.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='colThree'>
        <div className='pokeAdvance'>
          <div className='hoverAnimationBounce'>
            <img className= "imageSectionOne" src={require("../../../assets/season07-on-ptv-announce-169-en.png")} width={281} height={159} alt=""></img>
            <div className='purpleTwoBanner'>
              <h3>Take the <em>Advanced Challenge</em> on Pokémon TV</h3>
              <p>Ash, Pikachu, and friends continue their journey through the Hoenn region as the seventh season of <em>Pokémon the Series</em> arrives on Pokémon TV this Friday.</p>
            </div>
          </div>
        </div>
        <div className='hoverAnimationBounce'>
          <h2 className='orangeText'>View All News</h2>
          <p className='blueText'>Keep up with all the latest developments!</p>
        </div>
      </div>
    </div>
  )
}

export default RowFour