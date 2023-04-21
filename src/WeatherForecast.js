import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";


export default function WeatherForecast(props){
  let [loaded , setLoaded] = useState(false);
  let [forecast , setForecast] = useState(null);
  function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
  }


  if (loaded){
    console.log(forecast)
return(
<div className="WeatherForecast">
<div className="row">
  <div className="col">
    <div className="card">
      <div className="card-body">
      <ForecastDay day={forecast[0]} /> 
 </div>
</div>
</div>
</div>
</div>
    );
 
  } else {
    let apiKey = "4f0a4d1c93b046bb93530ef7o3ded40t"
  let longitude =props.data.coordinates.lon;
  let latitude = props.data.coordinates.lat;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return null 
  }
}
