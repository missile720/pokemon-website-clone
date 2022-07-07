import React, { useState } from 'react'
import "./Pokemon.css"
function Pokemon(props) {
    const status = props.status;
    
  return (
    <li className={status ? "expanded" : null}>
        <div className='numberBackground'>{props.number}</div>
        <img className='pokemonPicture' src={props.img} width={250} height={250} alt=""></img>
        <div className='pokeName'>
            <h5>{props.name} <span className="pokeNumber">{props.number}</span></h5>
            <dl>
                <dt>Type</dt>
                <dd className='types'>
                    <span className={'typeLabel backgroundColor' + props.typeOne}> {props.typeOne} </span>
                    <span className={'typeLabel backgroundColor' + props.typeTwo}> {props.typeTwo} </span>
                </dd>
                <dt>Abilities</dt>
                <dd className='abilities'>
                    <span className='abilityLabel'>{props.abilityOne}</span>
                    <span className='slash'> {props.slash} </span> 
                    <span className='abilityLabel'>{props.abilityTwo}</span>
                </dd>
            </dl>
        </div>
    </li>
  )
}

export default Pokemon