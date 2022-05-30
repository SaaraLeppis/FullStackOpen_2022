import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';

const SingleCountry = ({ list }) => {
  const [currentWeather, setCurrentWeather] = useState('')
  const [isLoading, setIsLoading] = useState(true);
  const capital = list.capital[0];
  const openWeathermapKey = process.env.REACT_APP_OPENWEATHER_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${openWeathermapKey}`
      )
      .then(response => {
        setCurrentWeather(response.data);
        setIsLoading(false);
      })
  }, [])

  //helper variables 
  const languageObjectList = list.languages;
  const languageList = Object.keys(languageObjectList).map((key) => {
    return (languageObjectList[key])
  })

  if (isLoading) {
    return (
      <Loader />)
  }
  if (!isLoading) {
    return (
      <div>
        <h2>{list.name.common}</h2>
        <p>capital: {list.capital[0]}</p>
        <p>area: {list.area}</p>
        <h3>Languages</h3>
        <ul>
          {
            languageList.map(value =>
              <li key={value}>{value}</li>)
          }
        </ul>
        <img id='flag-image' alt="country flag" src={list.flags.svg} />
        <h2>Weather in {list.capital[0]}</h2>
        <p>temperature {currentWeather.main.temp} Celsius</p>

        <img id="weather-symbol" src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
          alt={currentWeather.weather[0].description} />
        <p>wind {currentWeather.wind.speed} m/s</p>
      </div>
    )
  }
};


export default SingleCountry;