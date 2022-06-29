import React from 'react'
import "./RowThree.css"

function RowThree() {
  return (
    <div className='rowThree'>
        <div className='pokeCenter'>
            <div className='hoverAnimationBounce'>
                <img className= "imageSectionOne" src={require("../../../assets/pokemon-center-169.jpg")} width={281} height={159} alt=""></img>
                <div className='redBanner'>
                    <h3>Gear Up for Pokémon GO Adventures and Support Your Team</h3>
                    <p>The Pokémon GO Teams Collection at the Pokémon Center features new hats, shirts, bags, and more.</p>
                </div>
            </div>
        </div>
        <div className='pokeBond'>
            <div className='hoverAnimationBounce'>
                <img className= "imageSectionOne" src={require("../../../assets/swsh10-trainer-gallery-169-en.jpg")} width={281} height={159} alt=""></img>
                <div className='lightBlueBanner'>
                    <h3>Celebrate the Bond Between Pokémon and Trainer</h3>
                    <p>The Pokémon TCG: <em>Sword & Shield—Astral Radiance</em> expansion’s Trainer Gallery set features popular Trainers.</p>
                </div>
            </div>
        </div>
        <div className='pokeAsh'>
            <div className='hoverAnimationBounce'>
                <img className= "imageSectionOne" src={require("../../../assets/sunny-days-169-en.png")} width={281} height={159} alt=""></img>
                <div className='yellowBanner'>
                    <h3>Soak in Sunny Days with Ash and Friends on Pokémon TV</h3>
                    <p>Summer vacations, summer camps, and summer battles abound in select episodes of <em>Pokémon the Series</em></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RowThree