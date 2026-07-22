import { useState } from 'react'
import axios from 'axios'
import searchIcon from '../assets/search.png'
import weatherIcon from '../assets/weather-icon.png'
import './HeadSection.css'

export function HeadSection({city,setCity,getWeather}){
    const keyHandler=(event)=>{
        if(event.key==='Enter'){
            getWeather();
        }
        else if(event.key==='Escape'){
            setCity('');
        }
    }
    
    return(
        <>
        <div className="head-section">
            <img src={weatherIcon} className="wether-icon" />
            <h1 className="title">Weather App</h1>
        </div>
        <div className="search-section">
            <input type="text" 
            placeholder='Enter city name:' 
            className='search-bar'
            onChange={(e)=>setCity(e.target.value)}
            value={city}
            onKeyDown={keyHandler}
            />
            <button className='search-button' onClick={getWeather}>
                <img src={searchIcon} className='search-icon'/>
            </button>
        </div>
        </>
    )
}