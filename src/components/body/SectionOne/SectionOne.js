import React, { useEffect, useState } from 'react'
import Feature from './Feature'
import RowOne from './RowOne'
import RowTwo from './RowTwo'
import SideNav from './SideNav'
import './SectionOne.css'

function SectionOne() {
  const[offset,setOffset] = useState('');

  useEffect(() => {
    const handleScroll = event => {
      console.log('window.scrollY', window.scrollY);
      if (window.scrollY >= 68) {
        setOffset("offset");
      } 
      else {
        setOffset("");
      }
    };

    window.addEventListener('scroll', handleScroll);

    return() => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={'sectionOneContainer ' + (offset)}>
      <SideNav/>
      <RowOne/>
      <RowTwo/>
      <Feature/>
    </div>
  )
}

export default SectionOne