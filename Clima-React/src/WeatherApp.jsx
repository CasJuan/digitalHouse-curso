import { useState } from 'react';
import './WeatherApp.css'


export const WeatherApp = () => {

    const [city, setcity] = useState('')
    const [weatherData, setWeatherData] = useState(null)

    const urlBase= `https://api.openweathermap.org/data/2.5/weather`;
    const API_KEY = '1a65ef24d863788e6125845fc1bb5ce3';
    const deffKelvin = 273.15;

    const fetchWeatherData = async() => {
        try {
            const response = await fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
            const data = await response.json()
            console.log(data)
            setWeatherData(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
         fetchWeatherData()
        console.log(city)
    }

    const handlelCityChange = (event) => {
        setcity(event.target.value)
    }

  return (
    <div className="container">
        <h1>Aplicacion de clima</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingresa una ciudad" value={city} onChange={handlelCityChange} />
            <button type="submit">Buscar</button>
        </form>

        {weatherData && (

            <div className='container-data'>
                <h2>{weatherData.name}, {weatherData.sys.country}</h2>
                <p>La temperatura actual es de { Math.floor(weatherData.main.temp - deffKelvin)}*C</p>
                <p>La condicion meteorologica es de: {weatherData.weather[0].description}</p>
                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description} />
            </div>

        )}

    </div>
  )
}
