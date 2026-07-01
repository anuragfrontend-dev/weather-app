import { Link } from 'react-router-dom'
import axios from 'axios'
import wetherImg from '../assets/rain.png'
import humidity  from '../assets/humidity.png'
import wind from '../assets/wind.png'
import { useState } from 'react'

export function Weather({weather,forecast}){
    
    return(
      <>
        {weather && weather.current && weather.current.condition &&(<div className="weather">
          <img src={weather.current.condition.icon} className='weatherImg'/>
          <h1 className='temp'>{weather.current.temp_c}°C</h1>
          <h3 className='weather-name'>{weather.location.name}</h3>
          <div className="weather-details">
            <div className="section">
              <img src={humidity}  />
              <div className="humidity-details">
                <p className='humidity'>{weather.current.humidity}%</p>
                <p>humidity</p>
              </div>
            </div>
            <div className="section">
              <img src={wind}  />
              <div className="wind-details">
                <p className='wind'>{weather.current.wind_kph}km/h</p>
                <p>wind speed</p>
              </div>
            </div>
          </div>
          <Link to={`/forecast/${weather.location.lat},${weather.location.lon}`}>
            <button className='dayForecast'>3-Days Forecast</button>
          </Link>
      </div>
      )}
    </>
  )
}