import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Forecast.css';

export function Forecast() {
    const [forecast, setForecast] = useState(null);
    const { city } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getForecast = async () => {
            try {
                const key = import.meta.env.VITE_API_KEY;
                const res = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=3`);
                setForecast(res.data);
            } catch (err) {
                console.log("API Error:", err);
                setForecast(null);
            } finally {
                setLoading(false);
            }
        };
        getForecast();
    }, [city]);

    if (loading) return <h2 className='errorContainer'>Loading...</h2>;

    if (!forecast?.forecast?.forecastday?.length) {
        return (
            <div className='errorContainer'>
                <p>No forecast data found</p>
                <Link to="/">
                    <button>Go Back Home</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="forecast-container">
            <h3>3-Day Forecast for {forecast.location.name}</h3>
            <div className="forecast-list">
                {forecast.forecast.forecastday.map((day, index) => (
                    <div className="forecast-item" key={index}>
                        <p>{new Date(day.date).toLocaleDateString('en-US', {weekday:'short'})}</p>
                        <img src={day.day.condition.icon} alt={day.day.condition.text} />
                        <p>{day.day.maxtemp_c}° / {day.day.mintemp_c}°</p>
                        <p>{day.day.condition.text}</p>
                    </div>
                ))}
            </div>
            <Link to="/">
                    <button className='goBackHome'>Go Back Home</button>
            </Link>
        </div>
    );
}