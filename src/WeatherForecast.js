import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props){
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