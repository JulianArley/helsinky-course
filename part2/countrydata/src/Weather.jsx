import axios from "axios"
import { useEffect, useState } from "react"
const Weather = ({country, weather}) => {
  const [weatherInfo, setWeatherInfo] = useState(null)

  useEffect(() => {
    const api_key = import.meta.env.VITE_WEATHER_KEY

    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&appid=${api_key}&units=metric`
    ).then(response => setWeatherInfo(response.data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!weather || weatherInfo === null) return

  return (
    <>
      <h1>Weather in <b>{weatherInfo.name}</b></h1>
      <p>Temperature {weatherInfo.main.temp} Celsius</p>
      <img src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}.png`} />
      <p>Wind {weatherInfo.wind.speed} m/s</p>
    </>
  )
}

export default Weather