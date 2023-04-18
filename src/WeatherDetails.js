import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

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
    <div className="col-md-6 col-12">
        <div className="card">
    <div className="card-body third-outline">
            <ul>
        <li>Humidity: {props.data.humidity} %</li>
        <li>Wind: {Math.round(props.data.wind)} km/h</li>
        </ul>
        </div>
        </div>
            </div> 
    <div className="col-md-6 col-12">
    <div className="card">
    <div className="card-body  fourth-outline">
        <div className="row">
            <div className="col-4">
        <img src={props.data.iconUrl} alt={props.data.description}/>
        </div>
        <div className="col-8">
        <WeatherTemperature celsius={props.data.temperature} />
        </div>
        </div>
        </div>
        </div>
        </div> 
    </div>
    </div>
    );
}