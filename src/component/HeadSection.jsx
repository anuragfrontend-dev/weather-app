import { useState } from 'react'
import axios from 'axios'
import searchIcon from '../assets/search.png'
import './HeadSection.css'

export function HeadSection({city,setCity,getWeather}){
    
    return(
        <div className="header-Section">
            <input type="text" 
            placeholder='Enter city name:' 
            className='search-bar'
            onChange={(e)=>setCity(e.target.value)}
            value={city}
            />
            <button className='search-button' onClick={getWeather}>
                <img src={searchIcon} className='search-icon'/>
            </button>
        </div>
    )
}