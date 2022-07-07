import React, { useState } from 'react'
import Pokemon from './Pokemon';
import "./Slider.css"

const pokemons = [
  {
    id: 1,
    name: "Roselia",
    number: 315,
    img: require("../../../assets/315.png"),
    typeOne: "Grass",
    typeTwo: "Poison",
    abilityOne: "Poison Point",
    abilityTwo: "Natural Cure",
    slash: "/",
    status: false
  },
  {
    id: 2,
    name: "Metang",
    number: 375,
    img: require("../../../assets/375.png"),
    typeOne: "Steel",
    typeTwo: "Psychic",
    abilityOne: "Clear Body",
    abilityTwo: "",
    slash: "",
    status: false
  },
  {
    id: 3,
    name: "Bonsly",
    number: 438,
    img: require("../../../assets/438.png"),
    typeOne: "Rock",
    typeTwo: "",
    abilityOne: "Rock Head",
    abilityTwo: "Sturdy",
    slash: "/",
    status: false
  },
  {
    id: 4,
    name: "Glaceon",
    number: 471,
    img: require("../../../assets/471.png"),
    typeOne: "Ice",
    typeTwo: "",
    abilityOne: "Snow Cloak",
    abilityTwo: "",
    slash: "",
    status: false
  },
  {
    id: 5,
    name: "Gogoat",
    number: 673,
    img: require("../../../assets/673.png"),
    typeOne: "Grass",
    typeTwo: "",
    abilityOne: "Sap Sipper",
    abilityTwo: "",
    slash: "",
    status: false
  },
  {
    id: 6,
    name: "Malamar",
    number: 687,
    img: require("../../../assets/687.png"),
    typeOne: "Dark",
    typeTwo: "Psychic",
    abilityOne: "Suction Cups",
    abilityTwo: "Contrary",
    slash: "/",
    status: true
  },
  {
    id: 7,
    name: "Kadabra",
    number: 64,
    img: require("../../../assets/064.png"),
    typeOne: "Psychic",
    typeTwo: "",
    abilityOne: "Inner Focus",
    abilityTwo: "Synchronize",
    slash: "/",
    status: false
  },
  {
    id: 8,
    name: "Machamp",
    number: 68,
    img: require("../../../assets/068.png"),
    typeOne: "Fighting",
    typeTwo: "",
    abilityOne: "Guts",
    abilityTwo: "No Guard",
    slash: "/",
    status: false
  },
  {
    id: 9,
    name: "Snorlax",
    number: 143,
    img: require("../../../assets/143.png"),
    typeOne: "Normal",
    typeTwo: "",
    abilityOne: "Thick Fat",
    abilityTwo: "Immunity",
    slash: "/",
    status: false
  },
  {
    id: 10,
    name: "Grovyle",
    number: 253,
    img: require("../../../assets/253.png"),
    typeOne: "Grass",
    typeTwo: "",
    abilityOne: "Overgrow",
    abilityTwo: "",
    slash: "",
    status: false
  }
];

function Slider() {
  const[previousClassName, setPreviousClassName] = useState("");
  const[nextClassName, setNextClassName] = useState("");
  const[translateX, setTranslateX] = useState(-790);
  const[translateReverseX, setTranslateReverseX] = useState(0);
  // const[counter,setCounter] = useState(0);
  // const[leftGrow,setLeftGrow] = useState("");
  const num = 254;

  const opacityOffHandler = () => {
    setPreviousClassName('opacityButton');
    setNextClassName('opacityButton');
  };

  const opacityOnHandler = () => {
    setPreviousClassName('');
    setNextClassName('');
  };

  const opacityOffPrevHandler = () => {
    setPreviousClassName('opacityButtonOn');
  };

  const opacityOnPrevHandler = () => {
    setPreviousClassName('opacityButton');
  };

  const opacityOffNextHandler = () => {
    setNextClassName('opacityButtonOn');
  };

  const opacityOnNextHandler = () => {
    setNextClassName('opacityButton');
  };

  const moveRightHandler = () => {
    for(let i = 0; i < pokemons.length; i++){
      if(pokemons[i].status === true){
        pokemons[i].status = false;
        pokemons[i+1].status = true;
        break;
      }
    }
    setTranslateX(translateX - num);
    setTranslateReverseX(translateReverseX+num);
    // pokemons.unshift(pokemons[counter]);
    pokemons.push(pokemons.shift());
    // setCounter(counter + 1);
  }

  const moveLeftHandler = () => {
    for(let i = 0; i < pokemons.length; i++){
      if(pokemons[i].status === true){
        pokemons[i].status = false;
        pokemons[i-1].status = true;
        break;
      }
    }
    setTranslateX(translateX + num);
    setTranslateReverseX(translateReverseX-num);
    pokemons.unshift(pokemons.pop());
  }

  

  return (
    <div className='Slider ' onMouseEnter={opacityOffHandler} onMouseLeave={opacityOnHandler}>
      <div className={"sliderButton previous " + (previousClassName)} 
        onMouseEnter={opacityOffPrevHandler} 
        onMouseLeave={opacityOnPrevHandler}
        onClick={moveLeftHandler}>
      </div>
      <div
      style = {{ 
      transform: `translateX(${translateReverseX}px)`,
      
      animationTimingFunction: "ease",
      animationFillMode: "forwards"}}>
        <ul className='sliderList'
        style = {{ 
        transform: `translateX(${translateX}px)`,
        transition: ".5s",
        animationTimingFunction: "ease",
        animationFillMode: "forwards"}}>
          {pokemons.map((pokemon) => (
            <Pokemon
            key = {pokemon.id} 
            name = {pokemon.name}
            number = {pokemon.number}
            img = {pokemon.img}
            typeOne = {pokemon.typeOne}
            typeTwo = {pokemon.typeTwo}
            abilityOne = {pokemon.abilityOne}
            abilityTwo = {pokemon.abilityTwo}
            slash = {pokemon.slash}
            status = {pokemon.status}
            />
          ))}
        </ul>
      </div>
      <div 
        className={"sliderButton next " + (nextClassName)} 
        onMouseEnter={opacityOffNextHandler} 
        onMouseLeave={opacityOnNextHandler}
        onClick={moveRightHandler}>
      </div>
    </div>
  )
}

export default Slider