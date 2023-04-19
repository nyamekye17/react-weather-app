import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
  function handleResponse(response){
    console.log(response.data);
  }

  let apiKey = "e97ae5d675e4c0ea5fe7521c6da29471"
  let longitude =props.data.coordinates.lon;
  let latitude = props.data.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`

  axios.get(apiUrl).then(handleResponse);
    return(
<div className="WeatherForecast">
<div className="row">
  <div className="col">
    <div className="card">
      <div className="card-body">
         <div className="Forecast-day">Wed</div>
         <div className="Forecast-icon">
         <img src={props.data.iconUrl} alt={props.data.description}/>
         </div>
         <div className="Forecast-temperatures">
             <span className="Forecast-temperature-max">19°</span>
             <span className="Forecast-temperature-min">10°</span>
             </div>
 </div>
</div>
</div>
</div>
</div>
    );
}