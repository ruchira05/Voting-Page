import './Player.css';
import React from 'react'
import { useState } from 'react';

var state = true;
export default function Player({imgSrc, name, imgCountry, country, count, setCount}) {
    [count, setCount] = useState(0);
    const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ set to true
    setIsActive(true);
  };

    return (
    <div class = "container" id='container' 
    style={{backgroundColor: isActive ? '#020735' : '',
            boxShadow: isActive? '10px': '' ,
            }
    }>
        <div className="sub-container-up">
            <h1>{count}</h1>
        </div>
        <h2>{name}</h2>
        <img className='profile-img' src={imgSrc} alt="Not found" />
        <h3> {country} <img className='country-img' src={imgCountry}/></h3> 
        <div className="sub-container-down">
            <button onClick={ () => {
                if (state) {
                    setCount(count + 1)
                    state = false
                    handleClick()
                }
            }}>
            {isActive ? <h1>VOTED</h1> : <h1>VOTE</h1>}</button>
        </div>
    </div>
  )
}
