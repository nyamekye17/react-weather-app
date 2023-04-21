import React from "react";

export default function ForecastDay(props){
    function day(){
        let date = new Date(props.day.time * 1000);
        let day = date.getDay();

        let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

        return days[day]
    }
    return(
        <div className="ForecastDay">
        <div className="Forecast-day">{day()}</div>
        <div className="Forecast-icon">
        <img src={props.day.condition.icon_url} alt={props.day.condition.description}/>
        </div>
        <div className="Forecast-temperatures">
            <span className="Forecast-temperature-max">{Math.round(props.day.temperature.maximum)}°</span>
            <span className="Forecast-temperature-min">{Math.round(props.day.temperature.minimum)}°</span>
            </div>
            </div>
    )
}