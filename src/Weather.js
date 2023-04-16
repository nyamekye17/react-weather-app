import React, { useState } from "react";
import WeatherDetails from "./WeatherDetails";
import axios from "axios";
import "./Weather.css";


import { ThreeDots } from  'react-loader-spinner';

export default function Weather(props){
const [weatherData , setWeatherData] = useState({ ready: false})
const [city , setCity] = useState(props.defaultCity)

function handleResponse(response){
console.log(response.data);
setWeatherData({
ready: true,
temperature: response.data.main.temp,
city: response.data.name,
wind: response.data.wind.speed,
humidity: response.data.main.humidity,
description: response.data.weather[0].description,
iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
date: new Date(response.data.dt * 1000),
});
    }

    function search(){
        const apiKey ="e97ae5d675e4c0ea5fe7521c6da29471";
        let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiURL).then(handleResponse);
    }
function handleSubmit(event){
event.preventDefault()
search()
}

function handleCityChange(event){
  setCity(event.target.value)  

}


if (weatherData.ready){
    return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
            <div className="card">
            <div className="card-body">
            <div className="row">
            <div className="col-9">
                <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" onChange={handleCityChange}/>
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary"/>
                </div>
                </div>
                </div>
            </div>
            </form>
            <WeatherDetails data={weatherData}/>
            
        </div>
    )
} else {
    search()
    return (
    <ThreeDots 
    height="80" 
    width="80" 
    radius="9"
    color="#fff0f5" 
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
     />
    )
    }
}