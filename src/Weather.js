import React, { useState } from "react";
import axios from "axios"
import "./Weather.css";
import FormattedDate from "./FormattedDate"

import { ThreeDots } from  'react-loader-spinner';

export default function Weather(props){
const [weatherData , setWeatherData] = useState({ ready: false})

function handleResponse(response){
console.log(response.data);
setWeatherData({
ready: true,
temperature: response.data.main.temp,
city: response.data.name,
wind: response.data.wind.speed,
humidity: response.data.main.humidity,
description: response.data.weather[0].description,
iconUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAdFJREFUeNrt2+1tgzAQBmBGYARGYAQWiNQRMkJGYARGYIRsUEbwX/5lBDa4niMrQpSqYN8d/jikV2oS9YwfwtmoagUAVcmpFEABFEABFGD7pucxz3ODGTAGA5sY91lTCR8iAG5ycDB9NgA4mfqPK/5f7O/USQMETP6DkDrAEDB5sduBBcA1PCDIwt0YuQAGIgBwtXqu1YMLwBACHIaKCQAuyunVgxzAdX9IBSFHgFO3Q263wDqNOAAO2hKvAOzfAhIAt+4/I5n4qZ1kMAAO1LkNC8QWdgA3eYg1rADua7+UDDDFPHlWANftIcHYi3anABgTBVjvFpsQgFfiAJ9HbV8AyCTmNEAke33K3EsHmEq+Bd4ptQkGAYylA7RFA6SyFT6YZ7YPQyzLYG6H2J/HFUABCgK4fc8tpsdM9mffk5OoQw6AA3QYWKX3PGmROhwAZjPg5HniInVIAbD4YzOYzehx0mJ1yACwcI1ZNoPZ1/XJkxatQwkw7mg/PK6aaB0SgJ1GY2MIGhZ7HSoAszNgR9Cw2OsEA6TY+MgAUm18lABJNj5KgCm0YV1dJxSgD21YV9cJBWjdQC/MV+DDyiV19B8mFEABFEABFEABFEABFOB3fgDsHp230RVQOwAAAABJRU5ErkJggg==",
date: new Date(response.data.dt * 1000),
});
    }

if (weatherData.ready){
    return(
        <div className="Weather">
            <div className="card">
            <div className="card-body">
            <div className="row">
            <div className="col-9">
                <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on"/>
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary"/>
                </div>
                </div>
                </div>
            </div>
            <div className="card">
            <div className="card-body">
            <h1>{weatherData.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={weatherData.date} />
                     </li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            </div>
            </div>
            <div className="row">
            <div className="col-6">
                <div className="card third-outline">
            <div className="card-body">
                    <ul>
                <li>Humidity: {weatherData.humidity} %</li>
                <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                </ul>
                </div>
                </div>
                    </div> 
            <div className="col-6">
            <div className="card">
            <div className="card-body">
                <img src={weatherData.iconUrl} alt={weatherData.description}/>
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="unit">°C</span>
                </div>
                </div>
                </div> 
            </div>
        </div>
    )
} else {
    const apiKey ="e97ae5d675e4c0ea5fe7521c6da29471";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

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