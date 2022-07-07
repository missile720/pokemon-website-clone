import React, { useState } from 'react'
import "./RowOne.css"

function RowOne() {
    const[pinkDark, setPinkDark] = useState('');
    const[purpleDark, setPurpleDark] = useState('');
    const[greyDark, setGreyDark] = useState('');

    const colorOneHandler = () => {
        setPinkDark('pinkDarkBanner');
    };

    const colorOneOffHandler = () => {
        setPinkDark('');
    };

    const colorTwoHandler = () => {
        setPurpleDark('purpleDarkBanner');
    };

    const colorTwoOffHandler = () => {
        setPurpleDark('');
    };

    const colorThreeHandler = () => {
        setGreyDark('greyDarkBanner');
    };

    const colorThreeOffHandler = () => {
        setGreyDark('');
    };

  return (
    <div className='rowOne'>
        <div className='worldChampion'>
            <div className='hoverAnimationBounce' onMouseEnter={colorOneHandler} onMouseLeave={colorOneOffHandler}>
                <img className="imageSectionOne" src={require("../../../assets/2022-worlds-169.jpg")} alt=""></img>
                <div className={'pinkBanner ' + (pinkDark)}>
                    <h3 className='whiteText'>Get Ready for the 2022 Pokémon World Championships</h3>
                    <p className='subText'>Start making plans for the big four-day event running August 18–21 in London, England, including Pokémon Center reservations.</p>
                </div>
            </div>
        </div>
        <div className='colOne'>
            <div className='vstar'>
                <div className='hoverAnimationBounce' onMouseEnter={colorTwoHandler} onMouseLeave={colorTwoOffHandler}>
                    <img className= "imageSectionOne" src={require("../../../assets/swsh10-origin-forme-palkia-vstar-169-en.jpg")} width={281} height={159} alt=""></img>
                    <div className={'purpleBanner ' + (purpleDark)}>
                        <h3>Make Space for Origin Forme Palkia VSTAR</h3>
                        <p>Find out why the Spatial Pokémon is blasting off in competitions around the world.</p>
                    </div>
                </div>
            </div>
            <div className='hisuan'>
                <div className='hoverAnimationBounce' onMouseEnter={colorThreeHandler} onMouseLeave={colorThreeOffHandler}>
                    <div className ='format'>
                        <img className= "imageSectionOne" src={require("../../../assets/pokemon-hisuian-snow-34-en.jpg")} width={112} height={150} alt=""></img>
                        <div className={'grayBanner ' + (greyDark)}>
                            <h3><em>Pokémon: Hisuian Snow</em> Episode 3</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RowOne