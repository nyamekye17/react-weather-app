import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherDetails(props){
    return (
        <div className="WeatherDetails">
    <div className="card">
    <div className="card-body">
    <h1>{props.data.city}</h1>
    <ul>
        <li>
            <FormattedDate date={props.data.date} />
             </li>
        <li className="text-capitalize">{props.data.description}</li>
    </ul>
    </div>
    </div>
    <div className="row">
    <div className="col-6">
        <div className="card third-outline">
    <div className="card-body">
            <ul>
        <li>Humidity: {props.data.humidity} %</li>
        <li>Wind: {Math.round(props.data.wind)} km/h</li>
        </ul>
        </div>
        </div>
            </div> 
    <div className="col-6">
    <div className="card">
    <div className="card-body">
        <img src={props.data.iconUrl} alt={props.data.description}/>
        <span className="temperature">{Math.round(props.data.temperature)}</span>
        <span className="unit">°C</span>
        </div>
        </div>
        </div> 
    </div>
    </div>
    );
}