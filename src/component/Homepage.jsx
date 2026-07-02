import { useState } from "react";
import { Weather } from "./Weather";
import { HeadSection } from "./HeadSection";
import axios from "axios";

export function Homepage() {
  const[city,setCity]=useState('');
  const[weather,setWeather]=useState(null);
  
  
    const getWeather= async()=>{
      if(!city.trim()){
        alert('Please enter city')
        return
      }

      try{
      const apikey=import.meta.env.VITE_API_KEY
      const res= await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${city}&days=5`)
      setWeather(res.data);
      setCity('')
      } catch(err){
        console.log(err);

        if(err.response.data.error){
          const errorCode=err.response.data.error.code 
          const errorMsg=err.response.data.error.message 

          if(errorMsg===1006){
            alert('Enter correct city name')
          }
          else if(errorCode===2008){
            alert('Api key is wrong')
          }
          else{
            alert(errorMsg)
          }
        }
        else{
          alert('Network error, Please check your Internet');
        }
        setWeather(null);
        setCity('');
      }
    }
  return (
    <div className="cart">
      <HeadSection city={city} setCity={setCity} getWeather={getWeather}/>
      <Weather weather={weather} />
    </div>
  )
}
