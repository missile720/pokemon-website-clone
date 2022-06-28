import React from 'react'
import "./Feature.css"

function Feature() {
  return (
    <div className='rowThree'>
        <h3>
            <span>
                <img src={require("../../../assets/pokeball.png")} alt="" width={25} height={25}></img>
            </span>Featured Pokémon</h3>
    </div>
  )
}

export default Feature